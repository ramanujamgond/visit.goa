// Define the type
interface CountryEmoji {
  code: string;
}

export const CountryEmoji = (countryCodeEmoji: CountryEmoji) => {
  // Split the code points
  const codePoints = countryCodeEmoji.code.split(" ");

  // Convert each code point to a decimal number
  const decimalCodePoints = codePoints.map((codePoint: string) =>
    parseInt(codePoint.slice(2), 16)
  );

  // Convert decimal code points to a string
  const emoji = String.fromCodePoint(...decimalCodePoints);

  return <span>{emoji}</span>;
};
