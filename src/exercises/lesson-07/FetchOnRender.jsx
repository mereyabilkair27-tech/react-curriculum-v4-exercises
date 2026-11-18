import { useEffect, useState } from 'react';
import { getPosts } from './api';
import './Lesson07Styles.css';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="root">
            <h1 className="heading">Fetch list of posts on render</h1>
            
      <div className="content">
                {isLoading && <p>Loading posts...</p>}
                {error && <p role="alert">Error: {error}</p>}
                
        {!isLoading && !error && (
          <div>
                        
            {posts.map((post) => (
              <article key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                              
              </article>
            ))}
                      
          </div>
        )}
              
      </div>
          
    </div>
  );
}
