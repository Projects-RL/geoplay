import { screen, fireEvent } from "@testing-library/react";
import SmallMenu from "../components/SmallMenu";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../utils/test-utils";

jest.mock("next/router", () => ({ __esModule: true, useRouter: jest.fn() }));

describe("SmallMenu", () => {
  it("renders 3 buttons", () => {
    renderWithProviders(<SmallMenu />);

    const menuBtns = screen.getAllByRole("button");

    expect(menuBtns.length).toBe(3);
  });

  it("should not render a selection div", () => {
    renderWithProviders(<SmallMenu />);

    const selectionElement = screen.queryByText("Asia");

    expect(selectionElement).not.toBeInTheDocument();
  });

  it("should render an selection div once the input has been clicked", () => {
    renderWithProviders(<SmallMenu />);

    const inputDiv = screen.getByText("Europe");
    fireEvent.click(inputDiv);

    const selectionElement = screen.getByText("Asia");

    expect(selectionElement).toBeInTheDocument();
  });

  test("that the input field changes when a new option is clicked", () => {
    renderWithProviders(<SmallMenu />);

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
