import ControlGroup from "./ControlGroup";
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
    <div className="options-group">
      <ControlGroup
        label="Letter Spacing"
        value={`${settings.letterSpacing}px`}
      >
        <input
          className="slider-control"
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
      </ControlGroup>

      <ControlGroup
        label="Word Spacing"
        value={`${settings.wordSpacing}px`}
      >
        <input
          className="slider-control"
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
      </ControlGroup>
    </div>
  );
}

export default SpacingOptions;