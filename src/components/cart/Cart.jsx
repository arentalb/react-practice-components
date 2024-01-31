import { Avatar } from "./Avatar.jsx";
import { Description } from "./Description.jsx";
import { SkillList } from "./SkillList.jsx";

export function Cart({ user }) {
  return (
    <div className={"p-4 bg-white  rounded-md w-72 "}>
      <Avatar image={user.img} />
      <Description name={user.name} desc={user.description} />
      <SkillList skills={user.skills} />
    </div>
  );
}
