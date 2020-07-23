import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";
import * as articlesApi from "../api/articles";
import { sampleArticle } from "./sampleData";

describe("App", () => {
  let container = null;
  let fetchArticleFn = articlesApi.fetchArticle;

  beforeAll(() => {
    articlesApi.fetchArticle = jest.fn();
  });

  afterAll(() => {
    articlesApi.fetchArticle = fetchArticleFn;
  });

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("Should render fetched article", async () => {
    articlesApi.fetchArticle.mockResolvedValueOnce(sampleArticle);

    await act(async () => {
      render(<App id="123" />, container);
    });

    const articleTitle = container.querySelector("h1").innerHTML;
    expect(articleTitle).toEqual(sampleArticle.elements.heading.value);
  });

  it("When fetch failed, it should render error state", async () => {
    articlesApi.fetchArticle.mockRejectedValueOnce();

    await act(async () => {
      render(<App id="123" />, container);
    });

    const retryButton = container.querySelector("button").innerHTML;
    expect(retryButton).toEqual("Try to load article again");
  });
});
