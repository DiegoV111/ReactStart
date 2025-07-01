function GalleryHeader({ titulo, subtitulo }) {
  return (
    <header style={{ marginBottom: '20px' }}>
      <h2>{titulo}</h2>
      <p style={{ color: '#555' }}>{subtitulo}</p>
    </header>
  );
}

export default GalleryHeader;
