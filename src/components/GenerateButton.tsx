import { useState } from "react";
import { exportPagesAsPdf } from "../utils/exportPdf";

function GenerateButton() {
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    const pages = Array.from(
      document.querySelectorAll(".export-page")
    ) as HTMLElement[];

    if (pages.length === 0) return;

    setLoading(true);

    try {
      await exportPagesAsPdf(pages, "handwriting.pdf");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      className="generate-btn"
      onClick={handleGenerate}
      disabled={loading}
    >
      {loading ? "Generating PDF..." : "Download PDF"}
    </button>
  );
}

export default GenerateButton;