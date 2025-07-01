import EmployeeCard from "./tarjetaEmpleado";

  const empleados = [
    { nombre: "Ana Martínez", puesto: "Desarrolladora Frontend", edad: 28, salarioMensual: 3200 },
    { nombre: "Carlos López", puesto: "Diseñador UX/UI", edad: 32, salarioMensual: 2800 },
    { nombre: "María García", puesto: "Project Manager", edad: 35, salarioMensual: 3800 },
    { nombre: "David Rodríguez", puesto: "Desarrollador Backend", edad: 29, salarioMensual: 3400 },
    { nombre: "Laura Sánchez", puesto: "QA Tester", edad: 26, salarioMensual: 2600 }
  ];

function EmployeeList() {
    
    return (
    <div>
      <h2>Lista de Empleados</h2>
      {empleados.map((empleado, index) => (
        <EmployeeCard
          key={index}
          nombre={empleado.nombre}
          puesto={empleado.puesto}
          edad={empleado.edad}
          salarioMensual={empleado.salarioMensual}
        />
      ))}
    </div>
  );


  
}

export default EmployeeList;
