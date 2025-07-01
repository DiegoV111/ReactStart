import GalleryHeader from './galleryHeader';
import PhotoCard from './photoCard';

function Gallery() {
  const fotos = [
    { titulo: "Amanecer en la Montaña", descripcion: "Primera luz del día iluminando los picos nevados" },
    { titulo: "Reflexiones Urbanas", descripcion: "Rascacielos reflejados en charcos después de la lluvia" },
    { titulo: "Vida Marina", descripcion: "Coloridos peces tropicales en arrecife de coral" },
    { titulo: "Bosque Encantado", descripcion: "Rayos de sol filtrándose entre árboles centenarios" },
    { titulo: "Desierto Infinito", descripcion: "Dunas doradas extendiéndose hasta el horizonte" },
    { titulo: "Aurora Boreal", descripcion: "Luces verdes danzando en el cielo nocturno" }
  ];

  const tituloGaleria = "Momentos Capturados";
  const subtituloGaleria = "Galería de fotografía profesional";

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <GalleryHeader titulo={tituloGaleria} subtitulo={subtituloGaleria} />

      {fotos.map((foto, index) => (
        <PhotoCard
          key={index}
          titulo={foto.titulo}
          descripcion={foto.descripcion}
        />
      ))}
    </div>
  );
}

export default Gallery;
