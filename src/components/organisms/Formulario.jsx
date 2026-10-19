import { useState } from "react";
import CampoFormulario from "../molecules/CampoFormulario";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

const valoresIniciales = { nombre: "", correo: "", mensaje: "" };

const validar = ({ nombre, correo, mensaje }) => {
    const errores = {};
    if (!nombre.trim()) errores.nombre = "El nombre es obligatorio.";
    if (!/^\S+@\S+\.\S+$/.test(correo)) errores.correo = "Correo inválido.";
    if (mensaje.trim().length < 10) errores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    return errores; // Corregida la sangría de esta línea para alinearla con el bloque principal
};

const Formulario = () => {
    const [valores, setValores] = useState(valoresIniciales);
    const [errores, setErrores] = useState({});
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValores({ ...valores, [name]: value });
        setEnviado(false); 
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = validar(valores);
    setErrores(nuevosErrores);
    
    if (Object.keys(nuevosErrores).length === 0) {
    setEnviado(true); 
    setValores(valoresIniciales); 
    } else {
    setEnviado(false); 
    }
};

    return (
        <form onSubmit={handleSubmit}>
        <CampoFormulario
            id="nombre"
            name="nombre"
            etiqueta="Nombre"
            value={valores.nombre}
            onChange={handleChange}
            error={errores.nombre}
        />
        <CampoFormulario
            id="correo"
            name="correo"
            etiqueta="Correo"
            value={valores.correo}
            onChange={handleChange}
            error={errores.correo}
        />
        <CampoFormulario
            id="mensaje"
            name="mensaje"
            etiqueta="Mensaje"
            value={valores.mensaje}
            onChange={handleChange}
            error={errores.mensaje}
        />
        <Button htmlType="submit">Enviar</Button>
        {enviado && <Text type="success">Mensaje enviado correctamente.</Text>}
        </form>
    );
    };

export default Formulario;

