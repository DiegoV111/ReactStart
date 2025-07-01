import './App.css'


/*import Category from './assets/components/category';

const productos = [
  { nombre: "iPhone 15", precio: 999, descuento: 10, categoria: "Electrónicos" },
  { nombre: "MacBook Air", precio: 1299, descuento: 15, categoria: "Electrónicos" },
  { nombre: "AirPods Pro", precio: 249, descuento: 20, categoria: "Electrónicos" },
  { nombre: "iPad Air", precio: 599, descuento: 5, categoria: "Electrónicos" },
  { nombre: "Camiseta Premium", precio: 29, descuento: 25, categoria: "Ropa" },
  { nombre: "Jeans Clásicos", precio: 79, descuento: 30, categoria: "Ropa" },
  { nombre: "Chaqueta de Cuero", precio: 199, descuento: 15, categoria: "Ropa" },
  { nombre: "Zapatillas Deportivas", precio: 89, descuento: 20, categoria: "Ropa" },
  { nombre: "Sofá Moderno", precio: 899, descuento: 25, categoria: "Hogar" },
  { nombre: "Mesa de Comedor", precio: 449, descuento: 10, categoria: "Hogar" },
  { nombre: "Lámpara LED", precio: 69, descuento: 15, categoria: "Hogar" },
  { nombre: "Alfombra Persa", precio: 299, descuento: 30, categoria: "Hogar" }
];

function App() {
  const categorias = ["Electrónicos", "Ropa", "Hogar"];

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      {categorias.map((categoria, index) => {
        const productosFiltrados = productos.filter(p => p.categoria === categoria);
        return <Category key={index} nombre={categoria} productos={productosFiltrados} />;
      })}
    </div>
  );
}

export default App;*/

import Blog from './assets/anidados/blog';

const posts = [
  {
    id: 1,
    title: "Primer Post",
    author: { name: "Ana Pérez", role: "Autora" },
    date: "2025-07-01",
    content: "Este es el contenido del primer post.",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/160"
    ],
    comments: [
      { author: { name: "Luis", role: "Lector" }, text: "Muy interesante." },
      { author: { name: "Marta", role: "Lectora" }, text: "Gracias por compartir." }
    ]
  },
  {
    id: 2,
    title: "Segundo Post",
    author: { name: "Carlos Ruiz", role: "Editor" },
    date: "2025-07-02",
    content: "Contenido del segundo post, más profundo.",
    images: ["https://via.placeholder.com/170"],
    comments: [
      { author: { name: "Lucía", role: "Lectora" }, text: "Excelente artículo." }
    ]
  }
];

const App = () => {
  return <Blog posts={posts} />;
};

export default App;


