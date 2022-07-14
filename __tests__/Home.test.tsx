import { render, screen } from "@testing-library/react";
import Home from "../pages";
import "@testing-library/jest-dom";

describe("Home", () => {
    it("renders a heading", () => {
        render(<Home />);

        const heading = screen.getAllByRole("heading");

        expect(heading[1]).toHaveTextContent("Geo");
        expect(heading[2]).toHaveTextContent("Play");
    });
});
