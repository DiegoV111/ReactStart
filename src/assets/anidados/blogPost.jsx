import PostHeader from './postHeader';
import PostContent from './postContent';
import PostFooter from './postFooter';

const BlogPost = ({ post }) => {
  return (
    <article className="blog-post">
      <PostHeader title={post.title} author={post.author} date={post.date} />
      <PostContent content={post.content} images={post.images} />
      <PostFooter comments={post.comments} />
    </article>
  );
};

export default BlogPost;
