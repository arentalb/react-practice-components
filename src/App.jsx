import Star from "./Star.jsx";

function App() {
  return (
    <div>
      <Star maxRating={10} initialValue={3} />
      <Star color={"#4861e5"} maxRating={4} initialValue={22} />
      <Star color={"#8d0082"} />
      <Star
        color={"#ffe91a"}
        maxRating={4}
        messages={["bad", "good", "very good", "excelent"]}
      />
      <Star
        color={"#2de6ff"}
        maxRating={4}
        messages={["😟", "👍", "😀", "👏"]}
        onChoose={handler}
      />
    </div>
  );
}

function handler(data) {
  console.log(data);
}

export default App;
