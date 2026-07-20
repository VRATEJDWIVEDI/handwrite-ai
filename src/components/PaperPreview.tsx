import type { Settings, SetSettings } from "../types/settings";
import { wrapText } from "../utils/textWrapper";
import { paginate } from "../utils/pagination";

type PaperPreviewProps = {
  settings: Settings;
  setSettings: SetSettings;
};

function PaperPreview({
  settings,
  setSettings,
}: PaperPreviewProps) {
  const wrappedLines = wrapText(
    settings.text,
    600,
    settings.fontFamily,
    settings.fontSize
  );

  const pages = paginate(wrappedLines, 20);

  return (


    <div>
      <h2>Input Text</h2>

      <textarea
        className="text-input"
        value={settings.text}
        onChange={(e) =>
          setSettings({
            ...settings,
            text: e.target.value,
          })
        }
        placeholder="Type something here..."
        rows={8}
      />

      <h2>Preview</h2>

<div className="preview-pages">
  {pages.length === 0 ? (
    <div className="paper">
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
        Your handwriting preview will appear here.
      </div>
    </div>
  ) : (
    pages.map((page, pageIndex) => (
      <div className="paper" key={pageIndex}>
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
          {page.map((line, lineIndex) => (
            <div key={lineIndex}>{line}</div>
          ))}
        </div>
      </div>
    ))
  )}
</div>

      {/* Rest of your preview code */}
    </div>
  );
}

export default PaperPreview;