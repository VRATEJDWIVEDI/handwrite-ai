type SpacingOptionsProps = {
  settings: {
    text: string;
    fontFamily: string;
    fontSize: number;
    inkColor: string;
    letterSpacing: number;
  };
  setSettings: React.Dispatch<
    React.SetStateAction<{
      text: string;
      fontFamily: string;
      fontSize: number;
      inkColor: string;
      letterSpacing: number;
    }>
  >;
};

function SpacingOptions({
  settings,
  setSettings,
}: SpacingOptionsProps) {
  return (
    <div className="panel">
      <h3>Spacing Options</h3>

      <label>
        Letter Spacing: <strong>{settings.letterSpacing}px</strong>
      </label>

      <input
        type="range"
        min="0"
        max="10"
        value={settings.letterSpacing}
        onChange={(e) =>
          setSettings({
            ...settings,
            letterSpacing: Number(e.target.value),
          })
        }
      />
    </div>
  );
}

export default SpacingOptions;