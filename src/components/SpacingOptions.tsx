import type { Settings, SetSettings } from "../types/settings";

type SpacingOptionsProps = {
  settings: Settings;
  setSettings: SetSettings;
};

function SpacingOptions({
  settings,
  setSettings,
}: SpacingOptionsProps) {
  return (
    <div className="panel">
      <h3>Spacing Options</h3>

      <label>Letter Spacing</label>

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

      <p>{settings.letterSpacing}px</p>

      <label>Word Spacing</label>

      <input
        type="range"
        min="0"
        max="20"
        value={settings.wordSpacing}
        onChange={(e) =>
          setSettings({
            ...settings,
            wordSpacing: Number(e.target.value),
          })
        }
      />

      <p>{settings.wordSpacing}px</p>
    </div>
  );
}

export default SpacingOptions;