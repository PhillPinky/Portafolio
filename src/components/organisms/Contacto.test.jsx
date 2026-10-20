import { render, screen } from "@testing-library/react";
import Contacto from "./Contacto";

describe("Contacto", () => {
  test("muestra el contacto de la sección", () => {
    render(<Contacto />);
    expect(screen.getByRole("heading", { name: /Contacto/i })).toBeInTheDocument();
  });

  test("muestra el enlace de GitHub y campos del formulario", () => {
    render(<Contacto />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();

    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo/i)).toBeInTheDocument();
  });
});