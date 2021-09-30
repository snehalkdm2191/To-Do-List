// NPM Packages
import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

// Project files
import Sorter from "./Sorter";
import { sortByString, reverseSort } from "../scripts/sorter/list-sorter";
jest.mock("../scripts/sorter/list-sorter");

test("Should call the sortByString function", async () => {
  // Arrange
  render(
    <RecoilRoot>
      <Sorter />
    </RecoilRoot>
  );

  // Act
  const buttonElement = screen.getByText(/task/i);

  fireEvent.click(buttonElement);

  // Assert
  expect(sortByString).toHaveBeenCalledTimes(1); 
});

test("Should call the reverseSort function", async () => {
  // Arrange
  render(
    <RecoilRoot>
      <Sorter />
    </RecoilRoot>
  );

  // Act
  const buttonElement = screen.getByText(/task/i);

  fireEvent.click(buttonElement);

  // Assert
  expect(reverseSort).toHaveBeenCalledTimes(0); 
});
