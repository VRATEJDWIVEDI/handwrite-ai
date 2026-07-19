type PaperPreviewProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

function PaperPreview({ text, setText }: PaperPreviewProps) {
  return (
    <div>
      <h2>Input Text</h2>

      <textarea
        className="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here..."
        rows={8}
      />

      <h2>Preview</h2>

      <div className="paper">
        <div className="margin-line"></div>

        <div className="paper-content">
          {text || "Your handwriting preview will appear here."}
        </div>
      </div>
    </div>
  );
}

export default PaperPreview;