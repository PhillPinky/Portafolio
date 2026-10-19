import Title from "../atoms/Title";
import fondo from "../../assets/img/Banner.png";

const estilos = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${fondo})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "4rem 1rem",
  textAlign: "center",
};

const Banner = () => (
  <header style={estilos}>
    <Title level={1} style={{ color: "white" }}>Portafolio Profesional</Title>
  </header>
);

export default Banner;