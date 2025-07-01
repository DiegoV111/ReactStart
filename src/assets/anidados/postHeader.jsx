import AuthorInfo from './autorInfo';

const PostHeader = ({ title, author, date }) => {
  return (
    <header>
      <h2>{title}</h2>
      <AuthorInfo author={author} />
      <p>{date}</p>
    </header>
  );
};

export default PostHeader;
