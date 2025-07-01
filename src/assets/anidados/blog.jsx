import BlogPost from './blogPost';

const Blog = ({ posts }) => {
  return (
    <div>
      <h1>Blog</h1>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Blog;
