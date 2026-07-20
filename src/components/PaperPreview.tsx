type PaperPreviewProps = {
  settings: {
    text: string;
    fontFamily: string;
    fontSize: number;
  };
  setSettings: React.Dispatch<
    React.SetStateAction<{
      text: string;
      fontFamily: string;
      fontSize: number;
    }>
  >;
};

function PaperPreview({
  settings,
  setSettings,
}: PaperPreviewProps) {
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

      <div className="paper">
        <div className="margin-line"></div>

        <div
          className="paper-content"
         style={{
  fontFamily: settings.fontFamily,
  fontSize: settings.fontSize,
  color: settings.inkColor,
  letterSpacing: `${settings.letterSpacing}px`,
}}
        >
          {settings.text || "Your handwriting preview will appear here."}
        </div>
      </div>
    </div>
  );
}

export default PaperPreview;