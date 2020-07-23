export function getLeadImagePropsFrom(value) {
  const caption = value?.leadImageCaption?.value;
  const credits = value?.leadImageCredit?.value;
  const leadImageData = value?.leadImage;
  const altText = leadImageData?.asset?.altText;
  const src = leadImageData?.renditions?.lead?.source;

  return {
    src,
    altText,
    caption,
    credits
  };
}