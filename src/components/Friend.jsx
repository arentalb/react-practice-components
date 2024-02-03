import { Button } from "./Button.jsx";

export function Friend({ friend, selectedFriend, setSelectedFriend }) {
  const handleSelectFriend = () => {
    setSelectedFriend((prevSelectedFriend) =>
      friend.id === prevSelectedFriend?.id ? null : friend,
    );
  };

  const getBackgroundColor = () =>
    selectedFriend?.id === friend.id ? "bg-blue-400" : "bg-blue-300";

  return (
    <div
      className={`flex w-[350px] px-4 py-2 rounded-md items-center ${getBackgroundColor()}`}
    >
      <img src={friend.image} alt="" className="rounded-full mr-3" />
      <div>
        <p className="text-lg">{friend.name}</p>
        <p className={`text-sm ${balanceColor(friend?.balance)}`}>
          {balanceMessage(friend.balance, friend.name)}
        </p>
      </div>
      <div className="ml-auto">
        <Button onClick={handleSelectFriend}>
          {selectedFriend?.id === friend.id ? "close" : "select"}
        </Button>
      </div>
    </div>
  );
}

// Friend.propTypes = {
//   friend: PropTypes.object.isRequired,
//   selectedFriend: PropTypes.object,
//   setSelectedFriend: PropTypes.func.isRequired,
// };

const balanceColor = (balance) => {
  switch (true) {
    case balance > 0:
      return "text-red-700";
    case balance < 0:
      return "text-green-700";
    case balance === 0:
      return "text-grey-600";
    default:
      return "";
  }
};

const balanceMessage = (balance, name) => {
  switch (true) {
    case balance > 0:
      return `You owe ${name} $${balance}`;
    case balance < 0:
      return `${name} owes you $${-balance}`;
    case balance === 0:
      return `You and ${name} are even`;
    default:
      return "";
  }
};
