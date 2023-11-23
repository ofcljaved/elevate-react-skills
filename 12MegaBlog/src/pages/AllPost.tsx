import { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import dbService from '../appwrite/dbService';
import { Models } from 'appwrite';

const AllPost = () => {
  const [posts, setPosts] = useState<(CardProps & Models.Document)[]>([]);
  useEffect(() => {
    dbService
      .getAllPost([])
      .then((posts) => {
        if (posts) setPosts(posts.documents);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
