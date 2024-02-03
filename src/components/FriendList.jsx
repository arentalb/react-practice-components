import { Friend } from "./Friend.jsx";

export function FriendList({ friends, selectedFriend, setSelectedFriend }) {
  return (
    <div className={"flex flex-col gap-4 mb-6 "}>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
      ))}
    </div>
  );
}
