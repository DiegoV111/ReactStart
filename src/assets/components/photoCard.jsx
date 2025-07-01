function PhotoCard({ titulo, descripcion }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '8px',
      marginBottom: '12px',
      backgroundColor: '#f9f9f9'
    }}>
      <h4>{titulo}</h4>
      <p>{descripcion}</p>
    </div>
  );
}

export default PhotoCard;
