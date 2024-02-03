import { SplitForm } from "./components/SplitForm.jsx";
import { FriendList } from "./components/FriendList.jsx";
import { NewFriendForm } from "./components/NewFriendForm.jsx";
import { useState } from "react";

const friendsList = [
  {
    id: 1,
    name: "karwan",
    balance: 0,
    image: "https://i.pravatar.cc/50?u=a042581f4e29026704d",
  },
  {
    id: 2,
    name: "ahamd",
    balance: 40,
    image: "https://i.pravatar.cc/50?u=a042f4e29026704d",
  },
  {
    id: 3,
    name: "hawbir",
    balance: -20,
    image: "https://i.pravatar.cc/50?u=a042581f4e6704d",
  },
];

function App() {
  const [friends, setFriends] = useState(friendsList);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handelNewFriend(name, image) {
    const newFriend = {
      id: crypto.randomUUID(),
      name: name,
      balance: 0,
      image: `${image + name}`,
    };
    setFriends((fri) => [...fri, newFriend]);
  }

  function handelUpdateFriend(friend) {
    setSelectedFriend(null);
    setFriends(
      friends.map((fre) => (fre.id === selectedFriend.id ? friend : fre)),
    );
  }

  return (
    <div className={"h-screen flex justify-center items-center"}>
      <div className={"grid grid-cols-2 gap-4 "}>
        <div>
          <FriendList
            friends={friends}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
          />
          <NewFriendForm onSubmit={handelNewFriend} />
        </div>
        <div>
          {selectedFriend !== null ? (
            <SplitForm
              key={selectedFriend.id}
              selectedFriend={selectedFriend}
              onUpdateFriend={handelUpdateFriend}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
