import { Models } from 'appwrite';
import { FormEvent, useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Input, RTE, Select } from '..';
import dbService from '../../appwrite/dbService';
import storageService from '../../appwrite/storage';
import { RootState } from '../../store/store';

interface PostFormProps {
  post: CreatePost & Models.Document;
}

const PostForm = ({ post }: PostFormProps) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm<PostForm>({
      defaultValues: {
        title: post?.title || '',
        slug: post?.slug || '',
        content: post?.content || '',
        status: post?.status || 'active',
      },
    });

  const navigate = useNavigate();
  const userData: AuthState['userData'] = useSelector<RootState>(
    (state) => state.auth.userData
  );

  const submitPost: SubmitHandler<PostForm> = async (data) => {
    const file = data.image[0]
      ? await storageService.uploadFile(data.image[0])
      : null;

    if (post) {
      if (file && post.featuredImg)
        await storageService.deleteFile(post.featuredImg);

      const dbPost = await dbService.updatePost(post.$id, {
        ...data,
        featuredImg: file ? file.$id : undefined,
      });

      if (dbPost) navigate(`/post/${dbPost.$id}`);
    } else {
      const dbPost = await dbService.createPost({
        ...data,
        featuredImg: file ? file.$id : undefined,
        userId: userData.$id,
      });

      if (dbPost) navigate(`/post/${dbPost.$id}`);
    }
  };

  const slugTransform = useCallback((value: string) => {
    return value
      .trim()
      .toLowerCase()
      .replace(/^[a-zA-Z\d]+/g, '-');
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title || ''), {
          shouldValidate: true,
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, setValue, slugTransform]);

  return (
    <form onSubmit={handleSubmit(submitPost)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register('title', { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register('slug', { required: true })}
          onInput={(e: FormEvent<HTMLInputElement>) => {
            setValue('slug', slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues('content')}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register('image', { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={storageService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={['active', 'inactive']}
          label="Status"
          className="mb-4"
          {...register('status', { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? 'bg-green-500' : undefined}
          className="w-full"
        >
          {post ? 'Update' : 'Submit'}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
