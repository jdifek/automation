function formatText(input: string): string {
  const boldRegex = /\*\*(.*?)\*\*/g;
  const numberRegex = /\d+/g;

  let formattedText = input.replace(boldRegex, (_, p1) => `**${p1}**`);

  formattedText = formattedText
    .split("\n")
    .map((line) => {
      return line.replace(numberRegex, (match) => `\n${match}`);
    })
    .join("\n");

  return formattedText.trim();
}

export default formatText;
