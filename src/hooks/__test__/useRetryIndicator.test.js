import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import { useRetryIndicator } from "../useRetryIndicator";

function DummyComponent() {
  const [retries, retry] = useRetryIndicator();
  return (
    <div>
      <span>{retries}</span>
      <button onClick={retry}>retry</button>
    </div>
  );
}

describe("useRetryIndicator", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should change retries after calling retry callback", () => {
    act(() => {
      render(<DummyComponent />, container);
    });

    const previousRetries = container.querySelector("span").innerHTML;

    act(() => {
      const button = container.querySelector("button");
      Simulate.click(button);
    });

    const actualRetries = container.querySelector("span").innerHTML;

    expect(actualRetries).not.toEqual(previousRetries);
  });
});
