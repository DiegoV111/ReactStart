import Comment from './comment';

const CommentSection = ({ comments }) => {
  return (
    <div>
      <h4>Comentarios</h4>
      {comments.map((comment, idx) => (
        <Comment key={idx} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
