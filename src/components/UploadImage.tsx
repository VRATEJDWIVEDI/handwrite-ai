import type { ChangeEvent } from "react";
import { extractTextFromImage } from "../utils/extractText";
import type { Settings, SetSettings } from "../types/settings";
import ImagePreview from "./ImagePreview";
import OCRProgress from "./OCRProgress";

type Props = {
  settings: Settings;
  setSettings: SetSettings;
};

function UploadImage({ settings, setSettings }: Props) {
  async function handleUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setSettings((prev) => ({
        ...prev,
        ocrError: "Please upload an image file.",
      }));
      return;
    }

    // Validate file size (10 MB)
    const maxSize = 10 * 1024 * 1024;

    if (file.size > maxSize) {
      setSettings((prev) => ({
        ...prev,
        ocrError: "Image must be smaller than 10 MB.",
      }));
      return;
    }

    // Remove previous preview
    if (settings.imagePreview) {
      URL.revokeObjectURL(settings.imagePreview);
    }

    const imageUrl = URL.createObjectURL(file);

    setSettings((prev) => ({
      ...prev,
      imagePreview: imageUrl,
      isProcessingOCR: true,
      ocrProgress: 0,
      ocrError: null,
    }));

    try {
      const extractedText = await extractTextFromImage(
        file,
        (progress) => {
          setSettings((prev) => ({
            ...prev,
            ocrProgress: progress,
          }));
        }
      );

      setSettings((prev) => ({
        ...prev,
        text: extractedText,
        isProcessingOCR: false,
        ocrProgress: 100,
        ocrError: null,
      }));
    } catch (error) {
      console.error(error);

      setSettings((prev) => ({
        ...prev,
        isProcessingOCR: false,
        ocrProgress: 0,
        ocrError: "Failed to extract text. Please try another image.",
      }));
    } finally {
      // Allow selecting the same image again
      e.target.value = "";
    }
  }

  function handleClear() {
    const confirmed = window.confirm(
      "Clear the uploaded image and extracted text?"
    );

    if (!confirmed) return;

    if (settings.imagePreview) {
      URL.revokeObjectURL(settings.imagePreview);
    }

    setSettings((prev) => ({
      ...prev,
      imagePreview: null,
      text: "",
      ocrProgress: 0,
      isProcessingOCR: false,
      ocrError: null,
    }));
  }

  return (
    <>
      <label
  className={`upload-card ${
    settings.isProcessingOCR ? "disabled" : ""
  }`}
>
<input
  type="file"
  accept="image/*"
  hidden
  disabled={settings.isProcessingOCR}
  onChange={handleUpload}
/>
        <div className="upload-content">
  <span className="upload-icon">📷</span>

  <h3>Upload an Image</h3>

  <p>
    JPG, PNG or WEBP • Max 10 MB
  </p>
</div>
      </label>

<ImagePreview image={settings.imagePreview} />

<OCRProgress
  progress={settings.ocrProgress}
  isProcessing={settings.isProcessingOCR}
/>

{settings.ocrError && (
  <div
    className="ocr-error"
    role="alert"
  >
    ⚠️ {settings.ocrError}
  </div>
)}

{settings.imagePreview &&
 !settings.isProcessingOCR &&
 !settings.ocrError && (
  <div className="ocr-success">
    ✅ Text extracted successfully!
  </div>
)}

{settings.imagePreview && (
  <button
    type="button"
    className="clear-btn"
    onClick={handleClear}
  >
    🗑 Clear Image
  </button>
)}
    </>
  );
}

export default UploadImage;