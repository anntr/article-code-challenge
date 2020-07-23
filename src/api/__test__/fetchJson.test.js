import { fetchJson, ApiError } from "../fetchJson";

describe("fetchJson", () => {

  it("when fetch request got successfull response it should return json promise", () => {
    fetchMock.mockResponse(JSON.stringify({}));
    fetchJson("123").then(data => {
      expect(data).toEqual({});
    });
  });

  it("when fetch request was not successfull it should throw api error", () => {
	  fetch.mockResponseOnce(JSON.stringify({error: "some error"}), {status: 404});

	  return fetchJson("123").catch(e => expect(e).toBeInstanceOf(ApiError));
  });
});
