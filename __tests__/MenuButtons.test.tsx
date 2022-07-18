import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MenuButtons from "../components/MenuButtons";
import "@testing-library/jest-dom";

describe("MenuButtons", () => {
    it("renders 3 buttons", () => {
        render(<MenuButtons />);

        const menuBtns = screen.getAllByRole("button");

        expect(menuBtns.length).toBe(3);
    });

    // test("When Play is clicked, the submenu should appear", async () => {
    //     render(<MenuButtons />);

    //     const playButton = screen.getByRole("button", { name: /play/i });
    //     fireEvent.click(playButton);

    //     await waitFor(() =>
    //         expect(screen.getByText(/Ready/i)).toBeInTheDocument()
    //     );
    // });
});
