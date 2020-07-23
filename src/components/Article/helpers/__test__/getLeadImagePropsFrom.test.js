import { sampleArticle } from "../../../../__test__/sampleData";
import { getLeadImagePropsFrom } from "../getLeadImagePropsFrom";

describe("getLeadImagePropsFrom", () => {
  it("should pull image props from provided value object", () => {
    const value = sampleArticle.elements.mainImage.value;

    expect(getLeadImagePropsFrom(value)).toEqual({
      src:
        "/delivery/v1/resources/93493572-ea5b-4c27-89cf-8a5c3ee617ad?resize=1200px:846px&crop=1200:624;0,111",
      caption: "Staffordshire Terrier Pups",
      credits: "depositphotos.com",
      altText: ""
    });
  });

  it("when value object does not have required image properties it should return undefined for that prop", () => {
    const value = {};

    expect(getLeadImagePropsFrom(value)).toEqual({
      src: undefined,
      caption: undefined,
      credits: undefined,
      altText: undefined
    });
  });
});
