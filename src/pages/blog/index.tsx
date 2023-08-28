import { useEffect, useState } from 'react';
import { client } from '../../../tina/__generated__/client';
import { Post } from '../../../tina/__generated__/types';

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsResponse = await client.queries.postConnection({
        // filter: { draft: { eq: false } },
        // sort: 'date',
        // last: 100,
      });
      const posts = postsResponse.data.postConnection.edges?.map((post) => {
        return post?.node as Post;
      });
      if (posts && posts.length > 0) {
        setPosts(posts);
      }
    };
    getPosts();
  }, []);

  console.log('post', posts);
  return <div>blogs here</div>;
};

export default Blog;
