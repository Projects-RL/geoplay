import { screen, fireEvent } from "@testing-library/react";
import MenuButtons from "../components/MenuButtons";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../utils/test-utils";

describe("MenuButtons", () => {
  it("renders 3 buttons", () => {
    renderWithProviders(<MenuButtons />);

    const menuBtns = screen.getAllByRole("button");

    expect(menuBtns.length).toBe(3);
  });

  test("At initial rendering, the submenu should be hidden", () => {
    renderWithProviders(<MenuButtons />);
    const readyButton = screen.queryByText(/Ready/i);

    expect(readyButton).not.toBeInTheDocument();
  });

  test("When Play is clicked, the submenu should appear", async () => {
    renderWithProviders(<MenuButtons />);

    const playButton = screen.getByRole("button", { name: "Play" });
    fireEvent.click(playButton);

    expect(await screen.findByText(/Ready/i)).toBeInTheDocument();
  });
});
