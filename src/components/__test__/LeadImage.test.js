import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import { LeadImage } from "../Article/LeadImage";

function renderImageWithSuccess(container) {
  let imgElement;
  act(() => {
    render(<LeadImage src="" />, container);
    imgElement = container.querySelector("img");
    Simulate.load(imgElement);
  });

  return imgElement;
}

describe("LeadImage", () => {
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

  it("Should initially render in loading state", () => {
    act(() => {
      render(<LeadImage src="" />, container);
    });

    const loaderElement = container.querySelector(".react-loading-skeleton");
    expect(loaderElement).toBeTruthy();
  });

  it("When image could not be loaded it should remove loader element", () => {
    const someBrokenImgSrc = "/broken.url";

    act(() => {
      render(<LeadImage src={someBrokenImgSrc} />, container);
      const imgElement = container.querySelector("img");
      Simulate.error(imgElement);
    });

    const loaderElement = container.querySelector(".react-loading-skeleton");
    expect(loaderElement).toBeNull();
  });

  describe("When image is loaded", () => {
    it("it should remove loader element", () => {
      renderImageWithSuccess(container);

      const loaderElement = container.querySelector(".react-loading-skeleton");
      expect(loaderElement).toBeNull();
    });

    it("it should make image visible", () => {
      const imgElement = renderImageWithSuccess(container);

      expect(imgElement.style.visibility).not.toEqual("hidden");
    });
  });
});
