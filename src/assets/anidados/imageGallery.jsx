import Image from './image';

const ImageGallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((src, idx) => (
        <Image key={idx} src={src} />
      ))}
    </div>
  );
};

export default ImageGallery;
