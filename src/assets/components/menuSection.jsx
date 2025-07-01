import MenuItem from './menuItem';

function MenuSection({ titulo, platos }) {
  return (
    <section style={{ marginBottom: '30px' }}>
      <h3>{titulo}</h3>
      {platos.map((plato, index) => (
        <MenuItem
          key={index}
          nombre={plato.nombre}
          descripcion={plato.descripcion}
          precio={plato.precio}
          ingredientes={plato.ingredientes}
        />
      ))}
    </section>
  );
}

export default MenuSection;
