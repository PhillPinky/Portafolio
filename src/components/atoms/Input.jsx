import { Input as AntInput } from "antd";

const Input = ({ id, name, value, onChange, placeholder, status }) => (
  <AntInput
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    status={status}
  />
);

export default Input;