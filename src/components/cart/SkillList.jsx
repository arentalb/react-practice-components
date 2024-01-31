import { Skill } from "./Skill.jsx";

export function SkillList({ skills }) {
  return (
    <div>
      <h2 className={"uppercase text-sm mb-2 "}>all my skills is this </h2>
      <div className={"flex gap-1 flex-wrap    "}>
        {skills.map((currentSkill) => (
          <Skill skill={currentSkill} key={currentSkill.skill} />
        ))}
      </div>
    </div>
  );
}
