import "@testing-library/jest-dom";
jest.mock("*.svg", () => "mocked-svg");
jest.mock("*.png", () => "mocked-png");

global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation((message) => {
    if (message.includes("react-i18next")) {
      return;
    }
    console.warn(message);
  });
});

afterAll(() => {
  (console.warn as jest.Mock).mockRestore();
});
