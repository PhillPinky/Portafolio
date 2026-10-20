import Title from "../atoms/Title";
import Decoracion from "../atoms/Decoration.jsx";
import fondo from "../../assets/img/Banner.png";
import gifIzquierda from "../../assets/img/Doll.gif";
import gifDerecha from "../../assets/img/Doll.gif";
import "./Banner.css";

const estilos = {
  backgroundImage: `url(${fondo})`,
  backgroundSize: "100% 100%", 
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  aspectRatio: "1250 / 350", 
  width: "100%",
  maxWidth: "1080px",
  margin: "0 auto",
  position: "relative",
};

const ocultoVisualmente = {
  position: "absolute",
  width: 1,
  height: 1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
};

const Banner = () => (
  <header className="banner">
    <Decoracion src={gifIzquierda} className="banner__gif" />
    <div style={estilos}>
      <Title level={1} style={ocultoVisualmente}>Portafolio Profesional</Title>
    </div>
    <Decoracion src={gifDerecha} className="banner__gif" />
  </header>
);



export default Banner;