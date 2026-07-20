export function paginate(
  lines: string[],
  linesPerPage: number
): string[][] {
  const pages: string[][] = [];

  for (let i = 0; i < lines.length; i += linesPerPage) {
    pages.push(lines.slice(i, i + linesPerPage));
  }

  return pages;
}