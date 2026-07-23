type OCRProgressProps = {
  progress: number;
  isProcessing: boolean;
};

function OCRProgress({
  progress,
  isProcessing,
}: OCRProgressProps) {
  if (!isProcessing) return null;

  return (
    <div className="ocr-progress">
      <p>Extracting text...</p>

      <progress
        value={progress}
        max={100}
      />

      <p>{progress}%</p>
    </div>
  );
}

export default OCRProgress;