// NPM Packages
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

// Project files
import App from "./App";

test("Should show the welcome screen if the list is empty", () => {
  // Arrange
  const fakeData = [];

  Storage.prototype.getItem = jest.fn(() => JSON.stringify(fakeData));

  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );

  // Act
  const textElement = screen.getByText(/organize your life/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});

test("Should show the normal screen if the list has items", () => {
  // Arrange
  const fakeItem = {
    id: 1,
    name: "Yoga",
    date: "2020-10-06",
    acquired: false
  };
  const fakeData = [fakeItem];

Storage.prototype.getItem = jest.fn(() => JSON.stringify(fakeData));

  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );

  // Act
  const textElement = screen.getByText(/Your To Do List/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});
