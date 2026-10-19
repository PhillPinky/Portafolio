import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from "./Formulario";

describe("Formulario", () => {
  test("muestra errores al enviar vacío", async () => {
    render(<Formulario />);
    await userEvent.click(screen.getByRole("button", { name: /Enviar/i }));
    expect(screen.getByText("El nombre es obligatorio.")).toBeInTheDocument();
    expect(screen.getByText("Correo inválido.")).toBeInTheDocument();
    expect(screen.getByText("El mensaje debe tener al menos 10 caracteres.")).toBeInTheDocument();
  });
});

test("envía correctamente con datos válidos", async () => {
  render(<Formulario />);
  await userEvent.type(screen.getByLabelText(/Nombre/i), "Ana");
  await userEvent.type(screen.getByLabelText(/Correo/i), "ana@correo.com");
  await userEvent.type(screen.getByLabelText(/Mensaje/i), "Hola, este es un mensaje de prueba.");
  await userEvent.click(screen.getByRole("button", { name: /Enviar/i }));
  expect(screen.getByText("Mensaje enviado correctamente.")).toBeInTheDocument();
  expect(screen.queryByText("El nombre es obligatorio.")).not.toBeInTheDocument();
});