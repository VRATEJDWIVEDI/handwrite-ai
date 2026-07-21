import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportPagesAsPdf(
  pages: HTMLElement[],
  fileName: string
) {
  const pdf = new jsPDF("p", "px", "a4");

  for (let i = 0; i < pages.length; i++) {
    const canvas = await html2canvas(pages[i], {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight =
      (canvas.height * pageWidth) / canvas.width;

    if (i !== 0) {
      pdf.addPage();
    }

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pageWidth,
      pageHeight
    );
  }

  pdf.save(fileName);
}