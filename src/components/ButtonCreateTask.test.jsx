// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";

test("Should fire an event when press", () => {
    // Arrange
    const fakeMethod = jest.fn();
    render(<button onClick={fakeMethod}></button>);
  
    // Act
    const buttonElement = screen.getByRole("button");
  
    fireEvent.click(buttonElement);
  
    // Assert
    expect(fakeMethod).toHaveBeenCalledTimes(1);
  });