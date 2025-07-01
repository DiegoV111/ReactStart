import ImageGallery from './imageGallery';

const MediaSection = ({ images }) => {
  return (
    <div>
      <h4>Galería de Imágenes</h4>
      <ImageGallery images={images} />
    </div>
  );
};

export default MediaSection;
