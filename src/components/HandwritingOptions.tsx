type HandwritingOptionsProps = {
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

function HandwritingOptions({
  settings,
  setSettings,
}: HandwritingOptionsProps) {
  return (
    <div className="panel">
      <h3>Handwriting Options</h3>

      <label htmlFor="font">Choose Font</label>

      <select
        id="font"
        value={settings.fontFamily}
        onChange={(e) =>
          setSettings({
            ...settings,
            fontFamily: e.target.value,
          })
        }
      >
        <option value="cursive">Cursive</option>
        <option value="Georgia">Georgia</option>
        <option value="Arial">Arial</option>
        <option value="monospace">Monospace</option>
      </select>
    </div>
  );
}

export default HandwritingOptions;