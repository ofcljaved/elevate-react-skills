import { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import dbService from '../appwrite/dbService';
import { Models } from 'appwrite';

const Home = () => {
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
  if (!posts.length) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

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

export default Home;
