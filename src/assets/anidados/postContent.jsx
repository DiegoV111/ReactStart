import MediaSection from './mediaSection';

const PostContent = ({ content, images }) => {
  return (
    <section>
      <p>{content}</p>
      <MediaSection images={images} />
    </section>
  );
};

export default PostContent;
