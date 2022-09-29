import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Home from "../pages";
import { server } from "../mocks/server";
import UserAuth from "../components/UserAuth";
import userEvent from "@testing-library/user-event";

describe("Home", () => {
  beforeAll(() => {
    server.listen({
      onUnhandledRequest: "error",
    });
  });

  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });

  afterAll(() => {
    server.close();
  });

  const userValue = {
    email: "test@user.com",
    password: "pwd123",
  };

  test("Modal renders when the profile button is clicked, and it disappears when the overlay is clicked", () => {
    render(
      <Provider store={store}>
        <Home isLoggedIn={false} />
      </Provider>
    );

    const profileBtn = screen.getByTestId("profileButton");
    expect(screen.queryByPlaceholderText("Email")).not.toBeInTheDocument();

    fireEvent.click(profileBtn);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("overlay"));
    expect(screen.queryByPlaceholderText("Email")).not.toBeInTheDocument();
  });

  test("sign in correctly", async () => {
    render(
      <Provider store={store}>
        <Home isLoggedIn={false} />
      </Provider>
    );
    screen.debug();

    // Click on ProfileButton
    fireEvent.click(screen.getByTestId("profileButton"));
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: userValue.email },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: userValue.password },
    });
    fireEvent.click(screen.getByDisplayValue("Sign in"));

    await new Promise((r) => setTimeout(r, 1000));

    expect(screen.queryByPlaceholderText("Email")).toBeNull();
  });
});
