const AuthorInfo = ({ author }) => {
  return (
    <div className="author-info">
      <strong>{author.name}</strong> <span>({author.role})</span>
    </div>
  );
};

export default AuthorInfo;
