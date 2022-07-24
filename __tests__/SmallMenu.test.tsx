import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SmallMenu from "../components/SmallMenu";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useRouter } from "next/router";

function MockSmallMenu() {
    return (
        <Provider store={store}>
            <SmallMenu />
        </Provider>
    );
}

jest.mock("next/router", () => ({ __esModule: true, useRouter: jest.fn() }));

describe("SmallMenu", () => {
    it("renders 3 buttons", () => {
        render(<MockSmallMenu />);

        const menuBtns = screen.getAllByRole("button");

        expect(menuBtns.length).toBe(3);
    });

    it("should not render a selection div", () => {
        render(<MockSmallMenu />);

        const selectionElement = screen.queryByText("Asia");

        expect(selectionElement).not.toBeInTheDocument();
    });

    it("should render an selection div once the input has been clicked", () => {
        render(<MockSmallMenu />);

        const inputDiv = screen.getByText("Europe");
        fireEvent.click(inputDiv);

        const selectionElement = screen.getByText("Asia");

        expect(selectionElement).toBeInTheDocument();
    });

    test("that the input field changes when a new option is clicked", () => {
        render(<MockSmallMenu />);

        const inputDiv = screen.getByTestId("inputDiv");

        expect(inputDiv).toHaveTextContent("Europe");
        fireEvent.click(inputDiv);

        const selectionElement = screen.getByText("Asia");
        fireEvent.click(selectionElement);

        expect(inputDiv).toHaveTextContent("Asia");
    });

    // test('that a new page is rendered when the "Ready" button is clicked', () => {
    //     const mockRouter = {
    //         push: jest.fn(), // the component uses `router.push` only
    //     };
    //     render(<MockSmallMenu />);

    //     const readyButton = screen.getByText("Ready");
    //     fireEvent.click(readyButton);

    //     (useRouter as jest.Mock).mockReturnValue(mockRouter);

    //     expect(mockRouter.push).toHaveBeenCalledWith("/europe");
    // });
});
