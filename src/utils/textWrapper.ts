import { measureTextWidth } from "./textMeasure";

export function wrapText(
  text: string,
  maxWidth: number,
  fontFamily: string,
  fontSize: number
): string[] {
  const words = text.trim().split(/\s+/);

  if (!text.trim()) return [];

  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const nextLine = currentLine
      ? `${currentLine} ${word}`
      : word;

    const width = measureTextWidth(
      nextLine,
      fontFamily,
      fontSize
    );

    if (width <= maxWidth) {
      currentLine = nextLine;
    } else {
      if (currentLine) {
        lines.push(currentLine);
      }

      currentLine = word;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}