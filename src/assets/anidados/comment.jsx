import AuthorInfo from './autorInfo';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <AuthorInfo author={comment.author} />
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
