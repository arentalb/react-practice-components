import { Progress } from "@/components/ui/progress.jsx";

export function Report({ report, total }) {
  const percentage = (report.totalAmount / total) * 100;
  console.log(percentage);
  return (
    <div className={"mb-4"}>
      <div className={"flex justify-between mb-1 text-xs"}>
        <p> {report.category} </p>
        <p>{percentage.toFixed()}%</p>
      </div>
      <Progress value={percentage} />
    </div>
  );
}
