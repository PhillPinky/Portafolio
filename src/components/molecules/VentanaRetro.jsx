import Title from "../atoms/Title";
import "./VentanaRetro.css";

const VentanaRetro = ({ titulo, children }) => (
  <section className="ventana">
    <div className="ventana__barra">
      <Title level={2} style={{ margin: 0, fontSize: "1rem" }}>{titulo}</Title>
      <div className="ventana__botones" aria-hidden="true">
        <span>–</span>
        <span>□</span>
        <span className="ventana__cerrar">✕</span>
      </div>
    </div>
    <div className="ventana__cuerpo">{children}</div>
  </section>
);

export default VentanaRetro;