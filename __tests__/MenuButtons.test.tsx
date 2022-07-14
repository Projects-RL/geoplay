import { render, screen } from "@testing-library/react";
import MenuButtons from "../components/MenuButtons";
import "@testing-library/jest-dom";

describe("MenuButtons", () => {
    it("renders component", () => {
        render(<MenuButtons />);
    });

    it("renders 3 buttons", () => {
        render(<MenuButtons />);

        const menuBtns = screen.getAllByRole("button");

        expect(menuBtns.length).toBe(3);
    });
});
