export default function Toast({
  backgroundColor = "#638889",
  color = "#F9EFDB",
  fontSize = 16,
  location = "TR",
  message,
  radius = 8,
}) {
  function convertToHexColor(value) {
    if (/^#[0-9A-Fa-f]{6}$/i.test(value)) {
      return value;
    } else {
      return "#999999";
    }
  }

  const hexBackgroundColor = convertToHexColor(backgroundColor);
  const hexColor = convertToHexColor(color);

  const toastStyle = {
    backgroundColor: hexBackgroundColor,
    color: hexColor,
    fontSize: `${fontSize}px`,
    position: "fixed",
    padding: "10px 20px",
    minWidth: "120px",
    height: "40px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  };
  calculatePosition();

  function calculatePosition() {
    if (location === "TR") {
      toastStyle.top = "20px";
      toastStyle.right = "0";
      toastStyle.borderRadius = `${radius}px 0px 0px ${radius}px`;
    }
    if (location === "TL") {
      toastStyle.top = "20px";
      toastStyle.left = "0";
      toastStyle.borderRadius = `0px ${radius}px ${radius}px 0px`;
    }
    if (location === "BR") {
      toastStyle.bottom = "20px";
      toastStyle.right = "0";
      toastStyle.borderRadius = `${radius}px 0px 0px ${radius}px`;
    }
    if (location === "BL") {
      toastStyle.bottom = "20px";
      toastStyle.left = "0";
      toastStyle.borderRadius = `0px ${radius}px ${radius}px 0px`;
    }
  }

  return <div style={toastStyle}>{message}</div>;
}
