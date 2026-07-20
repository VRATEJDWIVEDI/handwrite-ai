import { useState } from "react";

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
const [settings, setSettings] = useState({
  text: "",
  fontFamily: "cursive",
  fontSize: 22,
  inkColor: "#000000",
  letterSpacing: 0,
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
          <MarginOptions />
          <GenerateButton />
        </div>
      </main>

      <Output />

      <Footer />
    </div>
  );
}

export default App;