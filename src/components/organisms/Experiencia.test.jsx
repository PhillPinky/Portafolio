import { render, screen } from "@testing-library/react";
import Experiencia from "./Experiencia";
import { experiencias } from "../../data/experiencia"; 

describe("Experiencia", () => {
  test("muestra la experiencia de la sección", () => {
    render(<Experiencia />);
    expect(screen.getByRole("heading", { name: /Experiencia/i })).toBeInTheDocument();
  });

  test("muestra el título de cada experiencia", () => {
    render(<Experiencia />);
    experiencias.forEach((item) => {
      expect(screen.getByText(item.titulo)).toBeInTheDocument();
    });
  });
});