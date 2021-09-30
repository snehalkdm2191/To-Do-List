import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

// Project files
import App from "../App";

test("open modal", () => {
  const modal = document.createElement("div");
  modal.setAttribute("id", "modal");
  document.body.appendChild(modal);
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );

  const buttonElement = screen.getByText(/Add a new task/i);
  fireEvent.click(buttonElement);

  const btnClose = screen.getByText(/X/i);
  expect(modal).toContainElement(btnClose);
});
