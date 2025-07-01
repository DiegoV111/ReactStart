const ProgresoAnual = () => {
  const ahora = new Date();
  const inicio = new Date(ahora.getFullYear(), 0, 1);
  const fin = new Date(ahora.getFullYear() + 1, 0, 1);
  const progreso = ((ahora - inicio) / (fin - inicio)) * 100;

  return (
    <div>
      <p>Progreso del año: {progreso.toFixed(2)}%</p>
    </div>
  );
};

export default ProgresoAnual;
