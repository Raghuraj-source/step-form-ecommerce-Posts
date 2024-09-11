import  { useState, useEffect } from 'react';
import axios from 'axios';

const JsonPlaceholderData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setPosts(response.data));
  }, []);

  return (
    <div className="post-list grid grid-cols-1 gap-4 p-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default JsonPlaceholderData;
