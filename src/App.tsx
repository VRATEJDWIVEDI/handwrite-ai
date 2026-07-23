import UploadImage from "./components/UploadImage";
import { useState } from "react";
import type { Settings } from "./types/settings";
import Header from "./components/Header";
import PaperPreview from "./components/PaperPreview";
import HandwritingOptions from "./components/HandwritingOptions";
import PageOptions from "./components/PageOptions";
import SpacingOptions from "./components/SpacingOptions";
import MarginOptions from "./components/MarginOptions";
import GenerateButton from "./components/GenerateButton";
import Output from "./components/Output";
import Footer from "./components/Footer";

function App() {
const [settings, setSettings] = useState<Settings>({
  text: "",
  fontFamily: "'Caveat', cursive",
  fontSize: 22,
  inkColor: "#000000",
  letterSpacing: 0,
  wordSpacing: 0,
  pageSize: "A4",
  lineHeight: 2,
  margin: 40,
  paperTheme: "notebook",

  imagePreview: null,
  ocrProgress: 0,
  isProcessingOCR: false,
  ocrError: null,
});

  return (
    <div className="app">
      <Header />

      <main className="main-layout">
        <div className="left-panel">
          <PaperPreview
            settings={settings}
            setSettings={setSettings}
          />
        </div>

        <div className="right-panel">
          <HandwritingOptions
            settings={settings}
            setSettings={setSettings}
          />

          <PageOptions
            settings={settings}
            setSettings={setSettings}
          />

          <SpacingOptions
  settings={settings}
  setSettings={setSettings}
/>
          <MarginOptions
  settings={settings}
  setSettings={setSettings}
/>
          <GenerateButton />
          <UploadImage
  settings={settings}
  setSettings={setSettings}
/>
        </div>
      </main>

      <Output />

      <Footer />
    </div>
  );
}

export default App;
