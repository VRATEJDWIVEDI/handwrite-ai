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
       {handwritingFonts.map((font) => (
  <option
    key={font.id}
    value={font.css}
  >
    {font.name}
  </option>
))}
      </select>
    </div>
  );
}

export default HandwritingOptions;