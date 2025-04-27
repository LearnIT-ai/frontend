import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Signup from "./Signup";
import { inputsValidation } from "../methods/inputsValidation";

describe("Signup Component", () => {
  it("renders signup form", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const lastNameInput = screen.getByRole("textbox", { name: /last name/i });
    const firstNameInput = screen.getByRole("textbox", { name: /first name/i });
    const fatherNameInput = screen.getByRole("textbox", {
      name: /father name/i,
    });
    const citySelect = screen.getByRole("combobox", {
      name: /cities/i,
    });
    const roleSelect = screen.getByRole("combobox", {
      name: /profile roles/i,
    });
    const nextBtn = screen.getByRole("button", {
      name: /account:signup.nextButton/i,
    });
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    const phoneInput = screen.getByRole("textbox", {
      name: /phone/i,
    });
    const passwordInput = screen.getByLabelText(/^password$/i);
    const passwordConfirmInput = screen.getByLabelText(/confirm password/i);
    const backBtn = screen.getByRole("button", {
      name: /account:signup.backButton/i,
    });
    const submitBtn = screen.getByRole("button", {
      name: /account:signup.button/i,
    });

    expect(lastNameInput).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(fatherNameInput).toBeInTheDocument();
    expect(citySelect).toBeInTheDocument();
    expect(roleSelect).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(passwordConfirmInput).toBeInTheDocument();
    expect(backBtn).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it("returns error when empty inputs are submitted", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const lastNameInput = screen.getByRole("textbox", {
      name: /last name/i,
    });
    const firstNameInput = screen.getByRole("textbox", {
      name: /first name/i,
    });
    const fatherNameInput = screen.getByRole("textbox", {
      name: /father name/i,
    });
    const citySelect = screen.getByRole("combobox", {
      name: /cities/i,
    });
    const roleSelect = screen.getByRole("combobox", {
      name: /profile roles/i,
    });
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    const phoneInput = screen.getByRole("textbox", {
      name: /phone/i,
    });
    const passwordInput = screen.getByLabelText(/^password$/i);
    const passwordConfirmInput = screen.getByLabelText(/confirm password/i);

    const submitBtn = screen.getByRole("button", {
      name: /account:signup.button/i,
    });

    fireEvent.change(lastNameInput, {
      target: { value: "" },
    });
    fireEvent.change(firstNameInput, {
      target: { value: "" },
    });
    fireEvent.change(fatherNameInput, {
      target: { value: "" },
    });
    fireEvent.change(citySelect, {
      target: { value: "" },
    });
    fireEvent.change(roleSelect, {
      target: { value: "" },
    });
    fireEvent.change(emailInput, {
      target: { value: "" },
    });
    fireEvent.change(phoneInput, {
      target: { value: "" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "" },
    });
    fireEvent.change(passwordConfirmInput, {
      target: { value: "" },
    });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/errors:signup.firstName/i)).toBeInTheDocument();
    expect(screen.getByText(/errors:signup.lastName/i)).toBeInTheDocument();
    expect(screen.getByText(/errors:signup.fatherName/i)).toBeInTheDocument();
    expect(screen.getByText(/errors:signup.city/i)).toBeInTheDocument();
    expect(screen.getByText(/errors:signup.profileType/i)).toBeInTheDocument();
    expect(screen.getByText(/errors:signup.email/i)).toBeInTheDocument();
    expect(screen.getByText(/errors:signup.phoneNumber/i)).toBeInTheDocument();
    expect(
      screen.getByText(/errors:signup.password/i) ||
        screen.getByText(/errors:signup.confirmPassword/i)
    ).toBeInTheDocument();
  });

  it("returns error when passwords don't match", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const passwordInput = screen.getByLabelText(/^password$/i);
    const passwordConfirmInput = screen.getByLabelText(/confirm password/i);

    fireEvent.change(passwordInput, {
      target: { value: "1234" },
    });
    fireEvent.change(passwordConfirmInput, {
      target: { value: "12345" },
    });

    const submitBtn = screen.getByRole("button", {
      name: /account:signup.button/i,
    });

    fireEvent.click(submitBtn);

    expect(
      screen.getByText(/errors:signup.additionalError/i)
    ).toBeInTheDocument();
  });

  it("should validate first name correctly", () => {
    const setInputsData = jest.fn();

    inputsValidation("firstName", "богданbohdan3267$$$*@(", setInputsData);
    expect(setInputsData).toHaveBeenCalledWith(expect.any(Function));

    const updateFn = setInputsData.mock.calls[0][0];
    const result = updateFn({ firstName: "" });
    expect(result).toEqual({ firstName: "Богдан" });
  });

  it("should validate last name correctly", () => {
    const setInputsData = jest.fn();

    inputsValidation("lastName", "шевченко?;:?:№?№478397", setInputsData);
    expect(setInputsData).toHaveBeenCalledWith(expect.any(Function));

    const updateFn = setInputsData.mock.calls[0][0];
    const result = updateFn({ lastName: "" });
    expect(result).toEqual({ lastName: "Шевченко" });
  });

  it("should validate father name correctly", () => {
    const setInputsData = jest.fn();

    inputsValidation("fatherName", "олег  ___овичname492890", setInputsData);
    expect(setInputsData).toHaveBeenCalledWith(expect.any(Function));

    const updateFn = setInputsData.mock.calls[0][0];
    const result = updateFn({ fatherName: "" });
    expect(result).toEqual({ fatherName: "Олегович" });
  });

  it("should format phone number according to the pattern", () => {
    const setInputsData = jest.fn();
    inputsValidation("phoneNumber", "38067%*()#)6543214$)_(#", setInputsData);
    const updateFn = setInputsData.mock.calls[0][0];
    const result = updateFn({ phoneNumber: "" });
    expect(result).toEqual({ phoneNumber: "+38-067-654-3214" });
  });

  it("returns error when email is invalid", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const submitBtn = screen.getByRole("button", {
      name: /account:signup.button/i,
    });

    fireEvent.change(emailInput, {
      target: { value: "test3793@ff." },
    });

    fireEvent.click(submitBtn);

    expect(screen.getByText(/errors:signup.invalidEmail/i)).toBeInTheDocument();
  });

  it("should update input value", async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    await userEvent.type(emailInput, "email");
    expect(emailInput).toHaveValue("email");
  });
});
