import CommentSection from './commentSection';

const PostFooter = ({ comments }) => {
  return (
    <footer>
      <CommentSection comments={comments} />
    </footer>
  );
};

export default PostFooter;
