import Text from "../atoms/Text";
import Title from "../atoms/Title";

const ExperienciaEstudio = ({ titulo, lugar, periodo }) => (
  <div>
    <Title level={5}>{titulo}</Title>
    <br />
    <Text>{lugar}</Text>
    <br />
    <Text>{periodo}</Text>
    <br />
  </div>

);

export default ExperienciaEstudio;
