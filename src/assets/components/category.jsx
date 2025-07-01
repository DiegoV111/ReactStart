import Product from "./product";

function Category({ nombre, productos }) {
  return (
    <div>
      <h2>{nombre}</h2>
      {productos.map((prod, index) => (
        <Product key={index} producto={prod} />
      ))}
    </div>
  );
}

export default Category;
