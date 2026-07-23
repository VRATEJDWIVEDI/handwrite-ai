import type { Dispatch, SetStateAction } from "react";

export type Settings = {
  text: string;
  fontFamily: string;
  fontSize: number;
  inkColor: string;
  letterSpacing: number;
  wordSpacing: number;
  pageSize: "A4" | "Letter";
  lineHeight: number;
  margin: number;
  paperTheme: "notebook" | "blank" | "exam";

  imagePreview: string | null;
  ocrProgress: number;
  isProcessingOCR: boolean;
  ocrError: string | null;
};

export type SetSettings = Dispatch<SetStateAction<Settings>>;