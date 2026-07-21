import type { Settings, SetSettings } from "../types/settings";

type MarginOptionsProps = {
  settings: Settings;
  setSettings: SetSettings;
};

function MarginOptions({ settings, setSettings }: MarginOptionsProps) {
  return (
    <div className="panel">
      <h3>Page Layout</h3>
        <label>Paper Theme</label>

<select
  value={settings.paperTheme}
  onChange={(e) =>
    setSettings({
      ...settings,
      paperTheme: e.target.value as
        | "notebook"
        | "blank"
        | "exam",
    })
  }
>
  <option value="notebook">Notebook</option>
  <option value="blank">Blank</option>
  <option value="exam">Exam</option>
</select>
      <label>Margin</label>

      <input
        type="range"
        min="10"
        max="80"
        value={settings.margin}
        onChange={(e) =>
          setSettings({
            ...settings,
            margin: Number(e.target.value),
          })
        }
      />

      <p>{settings.margin}px</p>

      <label>Line Height</label>

      <input
        type="range"
        min="1"
        max="3"
        step="0.1"
        value={settings.lineHeight}
        onChange={(e) =>
          setSettings({
            ...settings,
            lineHeight: Number(e.target.value),
          })
        }
      />

      <p>{settings.lineHeight}</p>
    </div>
  );
}

export default MarginOptions;