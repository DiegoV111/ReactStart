function EmployeeCard({ nombre, puesto, edad, salarioMensual }) {
  const salarioAnual = salarioMensual * 12;

  return (
    <div>
      <h3>{nombre}</h3>
      <p>Puesto: {puesto}</p>
      <p>Edad: {edad}</p>
      <p>Salario mensual: €{salarioMensual}</p>
      <p>Salario anual: €{salarioAnual}</p>
    </div>
  );
}

export default EmployeeCard;
