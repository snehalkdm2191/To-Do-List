import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
// Project files
import App from "../App";

test("The local storage has an empty list", () => {
    // Arrange
    const fakeTask = {};
      const fakeData = [fakeTask];
    
      Storage.prototype.getItem = jest.fn(() => JSON.stringify(fakeData));
    
      render(
        <RecoilRoot>
          <App />
        </RecoilRoot>
      );
    
      // Act
      const textElement = screen.getByText(/No task to show/i);
    
      // Assert
      expect(textElement).toBeInTheDocument();
});
