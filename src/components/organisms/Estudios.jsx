import Title from "../atoms/Title";
import ExperienciaEstudio from "../molecules/ExperienciaEstudio";
import { estudios } from "../../data/estudios";
import { Fragment } from "react";
import Divisor from "../atoms/Divisor";

const Estudios = () => (
  <section>
    <Title level={3}>
      Estudios
    </Title>
    {estudios.map((item, index) => (
      <Fragment key={item.id}>
        <ExperienciaEstudio titulo={item.titulo} lugar={item.lugar} periodo={item.periodo} />
        {index < estudios.length - 1 && <Divisor />}
      </Fragment>
    ))}
  </section>
);

export default Estudios;