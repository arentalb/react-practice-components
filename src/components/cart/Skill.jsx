export function Skill({ skill }) {
  return (
    <div
      className={`${colorCalculator(
        skill.level,
      )} px-3 text-xs py-1.5 rounded-full  text-gray-800`}
    >
      {skill.skill}
    </div>
  );
}

function colorCalculator(level) {
  switch (level) {
    case "beginner":
      return "bg-yellow-200";
    case "intermediate":
      return "bg-blue-200";
    case "advanced":
      return "bg-green-200";
    default:
      return "bg-gray-200";
  }
}
