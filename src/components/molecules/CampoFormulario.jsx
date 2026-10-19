import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

const CampoFormulario = ({ id, name, etiqueta, value, onChange, error }) => (
  <div>
    <Label htmlFor={id}>{etiqueta}</Label>
    <Input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      status={error ? "error" : ""}
    />
    {error && <Text type="danger">{error}</Text>}
  </div>
);

export default CampoFormulario;