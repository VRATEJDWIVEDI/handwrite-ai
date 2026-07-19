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
  const [text, setText] = useState("");

  return (
    <div className="app">
      <Header />

      <main className="main-layout">
        <div className="left-panel">
          <PaperPreview
            text={text}
            setText={setText}
          />
        </div>

        <div className="right-panel">
          <HandwritingOptions />
          <PageOptions />
          <SpacingOptions />
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