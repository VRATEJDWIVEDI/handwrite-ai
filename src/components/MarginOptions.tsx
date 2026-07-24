import ControlGroup from "./ControlGroup";
import type { Settings, SetSettings } from "../types/settings";

type MarginOptionsProps = {
  settings: Settings;
  setSettings: SetSettings;
};

function MarginOptions({
  settings,
  setSettings,
}: MarginOptionsProps) {
  return (
    <div className="options-group">
      <ControlGroup label="Paper Theme">
        <select
          className="select-control"
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
      </ControlGroup>

      <ControlGroup
        label="Margin"
        value={`${settings.margin}px`}
      >
        <input
          className="slider-control"
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
      </ControlGroup>

      <ControlGroup
        label="Line Height"
        value={settings.lineHeight.toFixed(1)}
      >
        <input
          className="slider-control"
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
      </ControlGroup>
    </div>
  );
}

export default MarginOptions;