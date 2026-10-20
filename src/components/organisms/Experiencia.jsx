import Title from "../atoms/Title";
import ExperienciaEstudio from "../molecules/ExperienciaEstudio";
import { experiencia } from "../../data/experiencia";

const Experiencia = () => (
  <section>
    <Title level={3}>
      Experiencia Laboral
    </Title>
    {experiencia.map((item) => (
      <ExperienciaEstudio 
        key={item.id} 
        titulo={item.titulo} 
        lugar={item.lugar} 
        periodo={item.periodo} 
      />
    ))}
  </section>
);

export default Experiencia;