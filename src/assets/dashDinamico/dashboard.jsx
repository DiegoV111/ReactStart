import RelojDigital from '../dashDinamico/reloj';
import CuentaRegresivaCumple from './cuentaRegresivaCumple';
import MensajeDiaSemana from './mensajeDiaSemana';
import ProgresoAnual from './progresoAnual';
import FraseMotivacional from './fraseMotivacional';

const Dashboard = () => {
  return (
    <div className="tablero">
      <h1>Tablero Dinámico</h1>
      <RelojDigital />
      <CuentaRegresivaCumple fecha="2025-7-18" />
      <MensajeDiaSemana />
      <ProgresoAnual />
      <FraseMotivacional />
    </div>
  );
};

export default Dashboard;
