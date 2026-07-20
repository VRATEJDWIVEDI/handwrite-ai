export function measureTextWidth(
  text: string,
  fontFamily: string,
  fontSize: number
): number {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) return 0;

  context.font = `${fontSize}px ${fontFamily}`;

  return context.measureText(text).width;
}