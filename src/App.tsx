import { useState } from "react";
import type { Settings } from "./types/settings";
import SidebarCard from "./components/SidebarCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Output from "./components/Output";

import UploadImage from "./components/UploadImage";
import PaperPreview from "./components/PaperPreview";
import HandwritingOptions from "./components/HandwritingOptions";
import PageOptions from "./components/PageOptions";
import SpacingOptions from "./components/SpacingOptions";
import MarginOptions from "./components/MarginOptions";
import GenerateButton from "./components/GenerateButton";

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

      <main className="dashboard">
        <aside className="sidebar">
        <SidebarCard
  title="Upload Image"
  icon="📷"
>
  <UploadImage
    settings={settings}
    setSettings={setSettings}
  />
</SidebarCard>

<SidebarCard
  title="Handwriting"
  icon="✍️"
>
  <HandwritingOptions
    settings={settings}
    setSettings={setSettings}
  />
</SidebarCard>

<SidebarCard
  title="Page Settings"
  icon="📄"
>
  <PageOptions
    settings={settings}
    setSettings={setSettings}
  />
</SidebarCard>

<SidebarCard
  title="Spacing & Margin"
  icon="⚙️"
>
  <SpacingOptions
    settings={settings}
    setSettings={setSettings}
  />

  <MarginOptions
    settings={settings}
    setSettings={setSettings}
  />
</SidebarCard>

<SidebarCard
  title="Export"
  icon="📤"
>
  <GenerateButton />
</SidebarCard>
        </aside>

        <section className="workspace">
          <PaperPreview
            settings={settings}
            setSettings={setSettings}
          />
        </section>
      </main>

      <Output />

      <Footer />
    </div>
  );
}

export default App;