import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditTemplate from "../EditTemplate"; // replace with your actual import
import { vi, describe, it, expect } from "vitest";

describe("EditTemplate", () => {
  it("should display empty form with 1 error", () => {
    const onSubmit = vi.fn();
    const isSubmitting = false;
    const initialState: React.ComponentProps<typeof EditTemplate>["initial"] = {
      title: "",
      description: "",
      data: [],
    };

    render(
      <EditTemplate
        initial={initialState}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    );

    expect(screen.getByLabelText(/title \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(
      screen.getByRole("alert", {
        name: /title field/i,
      })
    ).toBeInTheDocument();
  });

  it("should add new question after clicking '+'", async () => {
    const onSubmit = vi.fn();
    const isSubmitting = false;
    const initialState: React.ComponentProps<typeof EditTemplate>["initial"] = {
      title: "",
      description: "",
      data: [],
    };

    render(
      <EditTemplate
        initial={initialState}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    );

    userEvent.click(
      screen.getByRole("button", {
        name: /add question/i,
      })
    );

    expect(await screen.findByText(/question 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/question \*/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /add answer to question 0/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /delete question 0/i,
      })
    ).toBeInTheDocument();
  });

  it('should remove question after clicking "x"', async () => {
    const onSubmit = vi.fn();
    const isSubmitting = false;
    const initialState: React.ComponentProps<typeof EditTemplate>["initial"] = {
      title: "",
      description: "",
      data: [],
    };

    render(
      <EditTemplate
        initial={initialState}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    );

    userEvent.click(
      screen.getByRole("button", {
        name: /add question/i,
      })
    );

    expect(await screen.findByText(/question 1/i)).toBeInTheDocument();

    userEvent.click(
      screen.getByRole("button", {
        name: /delete question 0/i,
      })
    );

    await waitForElementToBeRemoved(screen.queryByText(/question 1/i));
  });

  it("should display 3 errors when new question added", async () => {
    const onSubmit = vi.fn();
    const isSubmitting = false;
    const initialState: React.ComponentProps<typeof EditTemplate>["initial"] = {
      title: "",
      description: "",
      data: [],
    };

    render(
      <EditTemplate
        initial={initialState}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    );

    userEvent.click(
      screen.getByRole("button", {
        name: /add question/i,
      })
    );

    await waitFor(() => screen.getByText(/question 1/i));
    expect(
      screen.getByRole("alert", {
        name: /question 0 field question/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("alert", {
        name: /question 0 field correct/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("alert", {
        name: /question 0 field answers/i,
      })
    ).toBeInTheDocument();
  });

  it("should add 3 new answers after clicking 3 times '+' within question card", async () => {
    const onSubmit = vi.fn();
    const isSubmitting = false;
    const initialState: React.ComponentProps<typeof EditTemplate>["initial"] = {
      title: "",
      description: "",
      data: [],
    };

    render(
      <EditTemplate
        initial={initialState}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    );

    userEvent.click(
      screen.getByRole("button", {
        name: /add question/i,
      })
    );

    await waitFor(() => screen.getByText(/question 1/i));
    userEvent.click(
      screen.getByRole("button", {
        name: /add answer to question 0/i,
      })
    );
    userEvent.click(
      screen.getByRole("button", {
        name: /add answer to question 0/i,
      })
    );
    userEvent.click(
      screen.getByRole("button", {
        name: /add answer to question 0/i,
      })
    );

    expect(
      await screen.findByRole("checkbox", {
        name: /check 0 from question 0/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("checkbox", {
        name: /check 1 from question 0/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("checkbox", {
        name: /check 2 from question 0/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/answer 0/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/answer 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/answer 2/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /delete 0 from question 0/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /delete 1 from question 0/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /delete 2 from question 0/i,
      })
    ).toBeInTheDocument();
  });

  it("should be valid when all fields are filled correctly", async () => {
    const onSubmit = vi.fn();
    const isSubmitting = false;
    const initialState: React.ComponentProps<typeof EditTemplate>["initial"] = {
      title: "",
      description: "",
      data: [],
    };

    render(
      <EditTemplate
        initial={initialState}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    );

    userEvent.type(
      screen.getByRole("textbox", {
        name: /title \*/i,
      }),
      "ti"
    );

    await waitFor(() =>
      expect(
        screen.getByRole("textbox", {
          name: /title \*/i,
        })
      ).toHaveValue("ti")
    );

    userEvent.type(
      screen.getByRole("textbox", {
        name: /description/i,
      }),
      "de"
    );

    await waitFor(() =>
      expect(
        screen.getByRole("textbox", {
          name: /description/i,
        })
      ).toHaveValue("de")
    );

    userEvent.click(
      screen.getByRole("button", {
        name: /add question/i,
      })
    );

    await waitFor(() => screen.getByText(/question 1/i));

    userEvent.click(
      screen.getByRole("button", {
        name: /add answer to question 0/i,
      })
    );
    userEvent.click(
      screen.getByRole("button", {
        name: /add answer to question 0/i,
      })
    );
    userEvent.click(
      screen.getByRole("button", {
        name: /add answer to question 0/i,
      })
    );

    userEvent.click(
      await screen.findByRole("checkbox", {
        name: /check 0 from question 0/i,
      })
    );

    userEvent.type(
      screen.getByRole("textbox", {
        name: /answer 0/i,
      }),
      "00"
    );

    await waitFor(() =>
      expect(
        screen.getByRole("textbox", {
          name: /answer 0/i,
        })
      ).toHaveValue("00")
    );

    userEvent.type(
      screen.getByRole("textbox", {
        name: /answer 1/i,
      }),
      "11"
    );

    await waitFor(() =>
      expect(
        screen.getByRole("textbox", {
          name: /answer 1/i,
        })
      ).toHaveValue("11")
    );

    userEvent.type(
      screen.getByRole("textbox", {
        name: /answer 2/i,
      }),
      "22"
    );

    await waitFor(() =>
      expect(
        screen.getByRole("textbox", {
          name: /answer 2/i,
        })
      ).toHaveValue("22")
    );

    userEvent.type(
      screen.getByRole("textbox", {
        name: /question \*/i,
      }),
      "qu"
    );

    await waitFor(() =>
      expect(
        screen.queryByRole("button", {
          name: /submit/i,
        })
      ).toBeEnabled()
    );

    userEvent.click(
      screen.getByRole("button", {
        name: /submit/i,
      })
    );

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        data: [
          {
            answers: {
              "0": "00",
              "1": "11",
              "2": "22",
            },
            correct: 0,
            no: 0,
            question: "qu",
          },
        ],
        description: "de",
        title: "ti",
      })
    );
  });
});
