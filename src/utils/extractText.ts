import Tesseract from "tesseract.js";

export async function extractTextFromImage(
  file: File,
  onProgress: (progress: number) => void
) {
  const result = await Tesseract.recognize(
    file,
    "eng",
    {
      logger(message) {
        if (message.status === "recognizing text") {
          onProgress(Math.round(message.progress * 100));
        }
      },
    }
  );

  return result.data.text;
}