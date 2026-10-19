import { Button as AntButton } from "antd";

const Button = ({ children, onClick, type = "primary", htmlType = "button" }) => (
  <AntButton type={type} htmlType={htmlType} onClick={onClick}>
    {children}
  </AntButton>
);

export default Button;