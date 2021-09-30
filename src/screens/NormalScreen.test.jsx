// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

// Project files
import NormalScreen from "./NormalScreen";

test("Should have a create item button to start adding items", () => {
  // Arrange
  render(
    <RecoilRoot>
      <NormalScreen />
    </RecoilRoot>
  );

  // Assert
  const buttonElement = screen.getByText("Add a new task");

  // Act
  expect(buttonElement).toBeInTheDocument();
});