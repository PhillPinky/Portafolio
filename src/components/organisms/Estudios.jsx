import Title from "../atoms/Title";
import ExperienciaEstudio from "../molecules/ExperienciaEstudio";
import { estudios } from "../../data/estudios";

const Estudios = () => (
  <section>
    <Title level={2}>Estudios</Title>
    {estudios.map((item) => (
      <ExperienciaEstudio key={item.id} titulo={item.titulo} lugar={item.lugar} periodo={item.periodo} />
    ))}
  </section>
);

export default Estudios;