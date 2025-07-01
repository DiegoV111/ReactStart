const CuentaRegresivaCumple = ({ fecha }) => {
  const hoy = new Date();
  const cumple = new Date(fecha);
  cumple.setFullYear(
    hoy.getMonth() > cumple.getMonth() ||
    (hoy.getMonth() === cumple.getMonth() && hoy.getDate() > cumple.getDate())
      ? hoy.getFullYear() + 1
      : hoy.getFullYear()
  );

  const diasRestantes = Math.ceil((cumple - hoy) / (1000 * 60 * 60 * 24));

  return <p>Faltan <strong>{diasRestantes}</strong> días para tu cumpleaños.</p>;
};

export default CuentaRegresivaCumple;
