import { Progress } from "@/components/ui/progress.jsx";

export function Report() {
  return (
    <div className={"mb-4"}>
      <div className={"flex justify-between mb-1 text-xs"}>
        <p> gatgory name </p>
        <p>400000</p>
      </div>
      <Progress value={33} />
    </div>
  );
}
