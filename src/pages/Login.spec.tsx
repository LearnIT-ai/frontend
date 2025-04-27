import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

describe("Login Component", () => {
  it("renders login form", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const submitBtn = screen.getByRole("button", {
      name: /account:login.button/i,
    });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it("returns error when empty inputs are submitted", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const submitBtn = screen.getByRole("button", {
      name: /account:login.button/i,
    });

    fireEvent.change(emailInput, {
      target: { value: "" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "" },
    });

    fireEvent.click(submitBtn);

    expect(screen.getByText(/errors:login.email/i)).toBeInTheDocument();
    expect(screen.getByText(/errors:login.password/i)).toBeInTheDocument();
  });

  it("returns error when email is invalid", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const submitBtn = screen.getByRole("button", {
      name: /account:login.button/i,
    });

    fireEvent.change(emailInput, {
      target: { value: "test3793@ff." },
    });

    fireEvent.click(submitBtn);

    expect(screen.getByText(/errors:login.invalidEmail/i)).toBeInTheDocument();
  });

  it("should update input value", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    await userEvent.type(emailInput, "email");
    expect(emailInput).toHaveValue("email");
  });
});
