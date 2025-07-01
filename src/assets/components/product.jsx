function Product({ producto }) {
  const precioFinal = producto.precio * (1 - producto.descuento / 100);

  return (
    <div>
      <h4>{producto.nombre}</h4>
      <p>Precio original: ${producto.precio}</p>
      <p>Descuento: {producto.descuento}%</p>
      <p>Precio final: ${precioFinal.toFixed(2)}</p>
    </div>
  );
}

export default Product;
