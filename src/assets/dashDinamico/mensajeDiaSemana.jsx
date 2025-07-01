const mensajes = {
  0: "Domingo: día de descanso.",
  1: "Lunes: Comienza la odisea w",
  2: "Martes: Chambeale w.",
  3: "Miércoles: Mitad de la semana",
  4: "Jueves: Kepp going dijo el otro.",
  5: "Viernes: Viernecito agushto",
  6: "Sábado: Dia familiar."
};

const MensajeDiaSemana = () => {
  const dia = new Date().getDay();
  return <p>{mensajes[dia]}</p>;
};

export default MensajeDiaSemana;
