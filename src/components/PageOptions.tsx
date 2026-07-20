import type { Settings, SetSettings } from "../types/settings";
import { PAGE_SIZES } from "../constants/pageSizes";
type PageOptionsProps = {
  settings: Settings;
  setSettings: SetSettings;
};

function PageOptions({
  settings,
  setSettings,
}: PageOptionsProps) {
  return (
    <div className="panel">
      <h3>Page Options</h3>
<label>Page Size</label>

<select
  value={settings.pageSize}
  onChange={(e) =>
    setSettings({
      ...settings,
      pageSize: e.target.value as "A4" | "Letter",
    })
  }
>
  <option value="A4">A4</option>
  <option value="Letter">Letter</option>
</select>
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