// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import ButtonToggle from "./ButtonToggle";

test("Should fire an event when press", () => {
  // Arrange
  const fakeMethod = jest.fn();
  render(<ButtonToggle onClick={fakeMethod} />);

  // Act
  const buttonElement = screen.getByText(/completed task/i);

  fireEvent.click(buttonElement);

  // Assert
  expect(fakeMethod).toHaveBeenCalledTimes(1);
});

test("Should say View completed task when status is false.", () => {
  // Arrange
  const fakeStatus = false;
  render(<ButtonToggle status={fakeStatus} />);

  // Act
  const textElement = screen.getByText(/view completed task/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});

test("Should say Hide completed task when status is true", () => {
  // Arrange
  const fakeStatus = true;
  render(<ButtonToggle status={fakeStatus} />);

  // Act
  const textElement = screen.getByText(/hide completed task/i);

  // Assert
  expect(textElement).toBeInTheDocument();
});
