import Title from "../atoms/Title";
import Text from "../atoms/Text";

const ExperienciaEstudio = ({ titulo, lugar, periodo }) => (
  <div>
    <Title level={3}>{titulo}</Title>
    <Text>{lugar}</Text>
    <br />
    <Text>{periodo}</Text>
  </div>
);

export default ExperienciaEstudio;
