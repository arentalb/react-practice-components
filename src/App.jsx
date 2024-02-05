import { useState } from "react";
import Toast from "./Toast.jsx";
import "./index.css";

function App() {
  const [copied, setCopied] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <div className={"conatiner"}>
      <div className={"btns"}>
        <button
          onClick={() => {
            setCopied(!copied);
            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }}
        >
          copied
        </button>
        <button
          onClick={() => {
            setRegistered(!registered);
          }}
        >
          registered
        </button>

        <button
          onClick={() => {
            setDeleted(!deleted);
          }}
        >
          deleted
        </button>

        <button
          onClick={() => {
            setAdded(!added);
          }}
        >
          added
        </button>
      </div>

      {copied ? (
        <Toast
          message={"Copied"}
          backgroundColor={"#638889"}
          color={"#ffffff"}
          location={"TR"}
          fontSize={22}
          radius={10}
        />
      ) : (
        ""
      )}

      {registered ? (
        <Toast
          message={"Registered"}
          backgroundColor={"#3498db"}
          color={"#ffffff"}
          location={"TL"}
          fontSize={34}
          radius={4}
        />
      ) : (
        ""
      )}

      {deleted ? (
        <Toast
          message={"Deleted"}
          backgroundColor={"#e74c3c"}
          color={"#ffffff"}
          location={"BR"}
          fontSize={16}
          radius={12}
        />
      ) : (
        ""
      )}

      {added ? (
        <Toast
          message={"Added"}
          backgroundColor={"#2ecc71"}
          color={"#ffffff"}
          location={"BL"}
          fontSize={34}
          radius={22}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
