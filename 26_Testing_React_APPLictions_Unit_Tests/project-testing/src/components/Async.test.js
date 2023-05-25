import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Async from "./Async";

describe("Does Async component :", () => {
  //   test("renders post if request succeeds", async () => {
  //     render(<Async />);

  //     const listItemElements = await screen.findAllByRole("listitem");
  //     expect(listItemElements).not.toHaveLength(0);
  //   });

  test("renders post if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
