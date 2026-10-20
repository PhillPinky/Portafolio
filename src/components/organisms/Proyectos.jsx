import { Row, Col } from "antd";
import VentanaRetro from "../molecules/VentanaRetro"; // Ajusta la ruta si es necesario
import TarjetaProyecto from "../molecules/TarjetaProyecto";
import { proyectos } from "../../data/proyectos";

const Proyectos = () => (
  <section>
    <VentanaRetro titulo="Proyectos">
      <Row gutter={[16, 16]}>
        {proyectos.map((proyecto) => (
          <Col key={proyecto.id} xs={20} md={24} >
            <TarjetaProyecto
              titulo={proyecto.titulo}
              imagenes={proyecto.imagenes}
              repositorio={proyecto.repositorio}
              leyenda={proyecto.leyenda}
            />
          </Col>
        ))}
      </Row>
    </VentanaRetro>
  </section>
);

export default Proyectos;