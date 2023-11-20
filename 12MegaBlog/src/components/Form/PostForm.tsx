import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Input, Select, RTE } from '..';
import storageService from '../../appwrite/storage';
import dbService from '../../appwrite/dbService';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || '',
        slug: post?.slug || '',
        content: post?.content || '',
        status: post?.status || 'active',
      },
    });
  const navigate = useNavigate();
  const userData = useSelector<RootState>((state) => state.auth.userData);

  return <div>PostForm</div>;
};

export default PostForm;
