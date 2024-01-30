export function videoLinkConverter({ condition }) {
  switch (condition) {
    case "Clear sky":
      return "videos/Clear sky.mp4";
    case "Partly cloudy":
      return "videos/Partly cloudy.mp4";
    case "Sunny":
      return "videos/Sunny.mp4";
    case "Rainy":
      return "videos/Rainy.mp4";
    case "Overcast":
      return "videos/Overcast.mp4";
    case "Snowy":
      return "videos/Snowy.mp4";
  }
}
