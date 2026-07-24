import ControlGroup from "./ControlGroup";
import type { Settings, SetSettings } from "../types/settings";

type PageOptionsProps = {
  settings: Settings;
  setSettings: SetSettings;
};

function PageOptions({
  settings,
  setSettings,
}: PageOptionsProps) {
  return (
    <div className="options-group">
      <ControlGroup label="Page Size">
        <select
          className="select-control"
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
      </ControlGroup>

      <ControlGroup
        label="Font Size"
        value={`${settings.fontSize}px`}
      >
        <input
          className="slider-control"
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
      </ControlGroup>

      <ControlGroup label="Ink Color">
        <input
          className="color-control"
          type="color"
          value={settings.inkColor}
          onChange={(e) =>
            setSettings({
              ...settings,
              inkColor: e.target.value,
            })
          }
        />
      </ControlGroup>
    </div>
  );
}

export default PageOptions;