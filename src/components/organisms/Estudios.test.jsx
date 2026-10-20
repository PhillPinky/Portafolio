import { render, screen } from "@testing-library/react";
import Estudios from "./Estudios";
import { estudios } from "../../data/estudios";

describe("Estudios", () => {
  test("muestra los estudios de la sección", () => {
    render(<Estudios />);
    expect(screen.getByRole("heading", { name: /Estudios/i })).toBeInTheDocument();
  });

  test("muestra el título de cada estudio", () => {
    render(<Estudios />);
    estudios.forEach((item) => {
      expect(screen.getByText(item.titulo)).toBeInTheDocument();
    });
  });
});