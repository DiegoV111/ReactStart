const frases = {
  mañana: "¡Hora del desyuno!",
  tarde: "Ya falta poquito pal descanso.",
  noche: "Ahora puedes relajarte.",
  madrugada: "Descanso."
};

const FraseMotivacional = () => {
  const hora = new Date().getHours();
  let momento;

  if (hora < 12) momento = 'mañana';
  else if (hora < 18) momento = 'tarde';
  else if (hora < 22) momento = 'noche';
  else momento = 'madrugada';

  return <p>{frases[momento]}</p>;
};

export default FraseMotivacional;
