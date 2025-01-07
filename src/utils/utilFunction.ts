export const utilFunction = (text: string): { text: string; confidence: number } => {
  const confidenceRegex =
    /\[?\s*(Confidence[:\s]*\d+%?|Confidence level[:\s]*\d+%?|(\d+)%?)\s*\]?/i;

  const cleanedText = text.replace(/\[.*?\]/g, "").trim();

  const match = cleanedText.match(confidenceRegex);
  const confidencePercentage = match
    ? parseInt(match[2] || match[1].match(/\d+/)?.[0] || "100", 10)
    : 100;

 
  const finalText = cleanedText
    .replace(/^Generated post:\s*/i, "")
    .replace(confidenceRegex, "")
    .trim();

  return {
    text: finalText,
    confidence: confidencePercentage,
  };
};
