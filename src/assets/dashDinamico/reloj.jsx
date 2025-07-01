import { useState, useEffect } from 'react';

const RelojDigital = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(intervalo);
  }, []);

  return <h2>Hora actual: {hora.toLocaleTimeString()}</h2>;
};

export default RelojDigital;
