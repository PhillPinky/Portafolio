import { Row, Col } from "antd";
import Title from "../atoms/Title";
import TarjetaProyecto from "../molecules/TarjetaProyecto";
import { proyectos } from "../../data/proyectos";

const Proyectos = () => (
  <section>
    <Title level={2}>Proyectos</Title>
    <Row gutter={[16, 16]}>
      {proyectos.map((proyecto) => (
        <Col key={proyecto.id} xs={24} md={12}>
          <TarjetaProyecto
            titulo={proyecto.titulo}
            imagenes={proyecto.imagenes}
            repositorio={proyecto.repositorio}
            leyenda={proyecto.leyenda}
          />
        </Col>
      ))}
    </Row>
  </section>
);

export default Proyectos;