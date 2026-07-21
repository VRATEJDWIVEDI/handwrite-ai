import { PAGE_SIZES } from "../constants/pageSizes";
import type { Settings } from "../types/settings";

type PaperPageProps = {
  page: string[];
  settings: Settings;
  pageNumber: number;
};

function PaperPage({
  page,
  settings,
  pageNumber,
}: PaperPageProps) {
    const pageSize = PAGE_SIZES[settings.pageSize];
  return (
    <div
  className={`paper export-page ${settings.paperTheme}`}
  style={{
    width: `${pageSize.width}px`,
    height: `${pageSize.height}px`,
  }}
>    <div className="page-number">
  Page {pageNumber}
</div>
      <div className="margin-line"></div>

      <div
        className="paper-content"
        style={{
          fontFamily: settings.fontFamily,
          fontSize: settings.fontSize,
          color: settings.inkColor,
          letterSpacing: `${settings.letterSpacing}px`,
          wordSpacing: `${settings.wordSpacing}px`,
          lineHeight: settings.lineHeight,
          padding: `${settings.margin}px`,
        }}
      >
        {page.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
}

export default PaperPage;