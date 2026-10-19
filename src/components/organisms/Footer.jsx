import Text from "../atoms/Text";

const Footer = () => {
  const anio = new Date().getFullYear();

  return (
    <footer>
      <Text>© {anio} Valentina Cordero. Todos los derechos reservados.</Text>
      <br />
      <Text>Correo institucional: va.corderoa@duocuc.cl</Text>
    </footer>
  );
};

export default Footer;