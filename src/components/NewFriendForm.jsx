import { Button } from "./Button.jsx";
import { useState } from "react";

export function NewFriendForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/50?u=342345");

  const [formVisibility, setFormVisibility] = useState(false);

  function handelName(e) {
    setName(e.target.value);
    setImage(() => "https://i.pravatar.cc/50?u=" + e.target.value);
  }

  function handelImage(e) {
    setImage(e.target.value);
  }

  function handelFormVisibility() {
    setFormVisibility((visibility) => !visibility);
  }

  function onAddNewFriend() {
    onSubmit(name, image);
    setName("");
    setImage("https://i.pravatar.cc/50?u=342345");
    setFormVisibility(false);
  }

  return (
    <div>
      {formVisibility ? (
        <div
          className={"w-[350px] flex flex-col gap-4 bg-blue-300 p-4 rounded-md"}
        >
          <div className={"flex items-center"}>
            <label htmlFor="">friends name </label>
            <input
              value={name}
              onChange={handelName}
              type="text"
              className={
                "border-gray-200 border-2 rounded-md px-2 py-2 ml-auto"
              }
            />
          </div>
          <div className={"flex items-center"}>
            <label htmlFor="">image url </label>
            <input
              value={image}
              onChange={handelImage}
              type="text"
              className={
                "border-gray-200 border-2 rounded-md px-2 py-2 ml-auto"
              }
            />
          </div>
          <div className={"flex-shrink-0 ml-auto"}>
            <Button onClick={onAddNewFriend}>add</Button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={"flex justify-end mt-4"}>
        <Button onClick={handelFormVisibility}>
          {formVisibility ? "close" : "open"}
        </Button>
      </div>
    </div>
  );
}
