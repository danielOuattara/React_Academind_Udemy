import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
import userEvent from "@testing-library/user-event";

test("renders 'Hello World' as text", () => {
  // 1: Arrange
  render(<Greetings />);

  // 2: Act
  // -> nothing

  // 3: Assert
  // screen -> get_X ,  query_X, find_X,

  const helloWorldText = screen.getByText("Hello World!", { exact: true });
  expect(helloWorldText).toBeInTheDocument();
});

//------------------------------------------------------------------------

describe("Greeting Component Test", () => {
  test("renders 'Hello World' as text", () => {
    render(<Greetings />);

    const helloWorldText = screen.getByText("Hello World!", { exact: true });
    expect(helloWorldText).toBeInTheDocument();
  });
});

//------------------------------------------------------------------------

describe("Testing User Interaction & State on Greetings Component :", () => {
  //----------------------------
  test("renders => 'Good to see you' if the button was NOT clicked", () => {
    render(<Greetings />);
    const goodToSeeYouText = screen.getByText("good to see you!", {
      exact: false,
    });
    expect(goodToSeeYouText).toBeInTheDocument();
  });

  //----------------------------
  test("renders => 'changed' if the button was clicked", async () => {
    const user = userEvent.setup();
    //Arrange
    render(<Greetings />);

    // Act
    await user.click(screen.getByRole("button", { name: /change text/i }));
    // act(() => userEvent.click(buttonElement));

    //Assert
    const changedText = await screen.findByText("Changed!", {
      exact: false,
    });

    expect(changedText).toBeInTheDocument();
  });

  //----------------------------
  test("text: 'It's good to see you!' is NO MORE visible after clicked", async () => {
    const user = userEvent.setup();
    //Arrange
    render(<Greetings />);

    // Act
    await user.click(screen.getByRole("button", { name: /change text/i }));
    // act(() => userEvent.click(buttonElement));

    //Assert
    const changedText = screen.queryByText("It's good to see you!", {
      exact: false,
    });

    const actualText = screen.getByText("Changed!");

    expect(changedText).toBeNull();
    expect(actualText).toBeInTheDocument();
  });
});

//------------------------------------------------------------------------
