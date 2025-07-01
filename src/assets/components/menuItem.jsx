function MenuItem({ nombre, descripcion, precio, ingredientes }) {
  return (
    <div style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>
      <h4>{nombre} — €{precio}</h4>
      <p>{descripcion}</p>
      <small><strong>Ingredientes:</strong> {ingredientes}</small>
    </div>
  );
}

export default MenuItem;
