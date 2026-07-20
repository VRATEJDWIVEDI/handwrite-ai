type PageOptionsProps = {
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

function PageOptions({
  settings,
  setSettings,
}: PageOptionsProps) {
  return (
    <div className="panel">
      <h3>Page Options</h3>

      <label>
        Font Size: <strong>{settings.fontSize}px</strong>
      </label>
<label>Ink Color</label>

<input
  type="color"
  value={settings.inkColor}
  onChange={(e) =>
    setSettings({
      ...settings,
      inkColor: e.target.value,
    })
  }
/>

      <input
        type="range"
        min="14"
        max="40"
        value={settings.fontSize}
        onChange={(e) =>
          setSettings({
            ...settings,
            fontSize: Number(e.target.value),
          })
        }
      />
    </div>
  );
}

export default PageOptions;