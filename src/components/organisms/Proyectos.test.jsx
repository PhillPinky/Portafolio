import { render, screen } from "@testing-library/react";
import Proyectos from "./Proyectos";
import { proyectos } from "../../data/proyectos"; 
describe("Proyectos", () => {
  test("muestra los proyectos de la sección", () => {
    render(<Proyectos />);
    expect(screen.getByRole("heading", { name: /Proyectos/i })).toBeInTheDocument();
  });

  test("muestra el título de cada proyecto", () => {
    render(<Proyectos />);
    proyectos.forEach((proyecto) => {
      expect(screen.getByText(proyecto.titulo)).toBeInTheDocument();
    });
  });
});