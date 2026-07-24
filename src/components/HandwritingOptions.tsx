import ControlGroup from "./ControlGroup";
import type { Settings, SetSettings } from "../types/settings";
import { handwritingFonts } from "../constants/fonts";

type HandwritingOptionsProps = {
  settings: Settings;
  setSettings: SetSettings;
};

function HandwritingOptions({
  settings,
  setSettings,
}: HandwritingOptionsProps) {
  return (
    <div className="options-group">
      <ControlGroup label="Choose Font">
        <select
          className="select-control"
          value={settings.fontFamily}
          onChange={(e) =>
            setSettings({
              ...settings,
              fontFamily: e.target.value,
            })
          }
        >
          {handwritingFonts.map((font) => (
            <option
              key={font.id}
              value={font.css}
            >
              {font.name}
            </option>
          ))}
        </select>
      </ControlGroup>
    </div>
  );
}

export default HandwritingOptions;