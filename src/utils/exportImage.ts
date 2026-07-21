import html2canvas from "html2canvas";

export async function exportPageAsImage(
  element: HTMLElement,
  fileName: string
) {
  const canvas = await html2canvas(element, {
    scale: 2,
    backgroundColor: "#ffffff",
  });

  const image = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = image;
  link.download = fileName;

  link.click();
}