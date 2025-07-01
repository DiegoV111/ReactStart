import "../../App.css";

const peliculas = [
  { titulo: "El Padrino", año: 1972 },
  { titulo: "Pulp Fiction", año: 1994 },
  { titulo: "El Señor de los Anillos", año: 2001 },
  { titulo: "Matrix", año: 1999 },
  { titulo: "Inception", año: 2010 },
];

function Peliculas() {

    const sumaYears = peliculas.reduce((acumulador, peli) => acumulador + peli.año, 0)

    const promedioYears = Math.round(sumaYears / peliculas.length)

  return (
    <div>
      <h2>Peliculas</h2>
      <ul>
        {peliculas.map((pelicula, index) => (
          <li key={index}>
            {pelicula.titulo} - {pelicula.año}
          </li>
        ))}
      </ul>
      <p>Promedio de años: {promedioYears}</p>
    </div>
  );
}

export default Peliculas;
