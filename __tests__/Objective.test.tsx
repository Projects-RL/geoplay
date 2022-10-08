import { render, screen } from "@testing-library/react";
import Objective from "../components/Objective";
import "@testing-library/jest-dom";

describe("Objective", () => {
    const objective = "Sweden";

    test("Smoke test", () => {
        render(<Objective objective={objective} />);
    });

    it("renders the correct objective", () => {
        render(<Objective objective={objective} />);

        const divElement = screen.getByText("Sweden");

        expect(divElement).toBeInTheDocument();
    });
});
