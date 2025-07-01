function RestaurantInfo({ nombre, descripcion, direccion, telefono }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
      <p><strong>Dirección:</strong> {direccion}</p>
      <p><strong>Teléfono:</strong> {telefono}</p>
    </div>
  );
}

export default RestaurantInfo;
