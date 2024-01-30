export function emojiConverter(condition) {
  switch (condition) {
    case "Clear sky":
      return "☀️";
    case "Partly cloudy":
      return "🌤️";
    case "Sunny":
      return "☀️";
    case "Rainy":
      return "🌧️";
    case "Overcast":
      return "⛈️";
    case "Snowy":
      return "❄️";
    default:
      return "❓";
  }
}
