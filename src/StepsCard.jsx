import { useState } from "react";

export function StepsCard({
  message = ["step 1 ", "step 2 ", "step 3", "..."],
  previousBtn = "Previous",
  nextBtn = "Next",
  btnColor = "bg-blue-400 ",
  stepColor = "bg-blue-400 ",
  stepPathColor = "bg-blue-300 ",
  onFinish = () => {},
}) {
  if (message.length < 3 || message.length > 6) return;
  const width = widthOfThePath(message.length);

  const [step, setStep] = useState(1);

  function handleNext() {
    if (step === message.length) onFinish();
    if (step === message.length) return;
    setStep((step) => step + 1);
  }

  function handlePrevious() {
    if (step === 1) return;
    setStep((step) => step - 1);
  }

  return (
    <>
      <div className="w-[600px] bg-white px-12 py-8 rounded-md my-10 mx-auto shadow-lg">
        <div className="flex justify-around mb-14">
          {message.map((_, index) => (
            <div key={index} className={" relative z-10"}>
              <div
                className={`${
                  step >= index + 1
                    ? `${stepColor} text-white`
                    : "bg-gray-200 text-gray-800"
                } w-10 h-10 flex items-center justify-center rounded-full `}
              >
                {index + 1}
              </div>
              <div>
                {index >= 0 && index < message.length - 1 ? (
                  <div
                    className={`${
                      step >= index + 2 ? `${stepPathColor}` : " "
                    } ${width} absolute top-1/2 h-3   -translate-y-1/2 left-8 -z-10`}
                  ></div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-3xl mb-8 min-h-20">
          <p>{message[step - 1]} </p>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            className={`px-4 py-2 ${btnColor} rounded-full text-white `}
          >
            {previousBtn}
          </button>
          <button
            onClick={handleNext}
            className={`px-4 py-2 ${btnColor} rounded-full text-white `}
          >
            {nextBtn}
          </button>
        </div>
      </div>
    </>
  );
}

function widthOfThePath(le) {
  switch (le + "") {
    case "3":
      return "w-36";
    case "4":
      return "w-32";
    case "5":
      return "w-24";
    case "6":
      return "w-20";
  }
}
