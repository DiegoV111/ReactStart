import "../../App.css";

const libros = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 417, genero: "Realismo mágico" },
  { titulo: "1984", autor: "George Orwell", paginas: 328, genero: "Distopía" },
  { titulo: "El Quijote", autor: "Miguel de Cervantes", paginas: 863, genero: "Clásico" },
  { titulo: "Fahrenheit 451", autor: "Ray Bradbury", paginas: 249, genero: "Distopía" },
  { titulo: "Pedro Páramo", autor: "Juan Rulfo", paginas: 124, genero: "Realismo mágico" },
  { titulo: "Dune", autor: "Frank Herbert", paginas: 688, genero: "Ciencia ficción" }
]

function Libros() {
  const totalPaginas = libros.reduce((suma, libro) => suma + libro.paginas, 0);

  const promedioPaginas = Math.round(totalPaginas / libros.length);

  const generos = libros.reduce((conteo, libro) => {
    conteo[libro.genero] = (conteo[libro.genero] || 0) + 1;
    return conteo;
  });

  const generoMasComun = Object.keys(generos).reduce((a, b) =>
    generos[a] > generos[b] ? a : b
  );

  const librosRecomendados = libros.filter(
    (libro) => libro.genero === generoMasComun
  );

  return (
    <div>
      <h2>Lista de libros</h2>
      <ul>
        {libros.map((libro, index) => (
          <li key={index}>
            <strong>{libro.titulo}</strong> — {libro.autor} | {libro.paginas}{" "}
            páginas | Género: {libro.genero}
          </li>
        ))}
      </ul>

      <h3>Estadísticas</h3>
      <p>Total de páginas: {totalPaginas}</p>
      <p>Promedio de páginas por libro: {promedioPaginas}</p>
      <p>
        Género más común: {generoMasComun} ({generos[generoMasComun]} libros)
      </p>

      <h3>Recomendaciones ({generoMasComun})</h3>
      <ul>
        {librosRecomendados.map((libro, index) => (
          <li key={index}>
            {libro.titulo} — {libro.autor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Libros;
