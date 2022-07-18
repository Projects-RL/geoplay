import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../pages";
import "@testing-library/jest-dom";
import SmallMenu from "../components/SmallMenu";
import { Provider } from "react-redux";
import { store } from "../redux/store";

// function MockSmallMenu() {
//     return (
//         <Provider store={store}>
//             <SmallMenu />
//         </Provider>
//     );
// }

describe("Home", () => {
    it("renders a heading", () => {
        render(<Home />);

        const heading = screen.getAllByRole("heading");

        expect(heading[1]).toHaveTextContent("Geo");
        expect(heading[2]).toHaveTextContent("Play");
    });

    test("At initial rendering, the submenu should be hidden", () => {
        render(<Home />);

        const readyButton = screen.queryByText(/Ready/i);

        expect(readyButton).not.toBeInTheDocument();
    });

    // test("When Play is clicked, the submenu should appear", async () => {
    //     render(<Home />);

    //     const playButton = screen.getByRole("button", { name: /play/i });
    //     fireEvent.click(playButton);
    //     // render(<MockHome />);
    //     await waitFor(() =>
    //         expect(screen.getByText(/Ready/i)).toBeInTheDocument()
    //     );
    // });
});
