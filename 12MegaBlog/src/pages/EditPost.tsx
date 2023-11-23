import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, PostForm } from '../components';
import dbService from '../appwrite/dbService';
import { Models } from 'appwrite';

const EditPost = () => {
  const [post, setPost] = useState<CreatePost & Models.Document>();
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      dbService
        .getPost(slug)
        .then((post) => {
          post && setPost(post);
        })
        .catch((error: any) => console.log(error));
    } else {
      navigate('/');
    }
  }, [slug, navigate]);

  return (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
};

export default EditPost;
