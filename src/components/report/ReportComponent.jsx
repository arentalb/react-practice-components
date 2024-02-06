import { ReportChart } from "@/components/report/ReportChart.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ReportList } from "@/components/report/ReportList.jsx";

export function ReportComponent() {
  return (
    <>
      <div className={"h-60 flex justify-center mb-8"}>
        <ReportChart />
      </div>
      <div>
        <div className={"flex justify-center gap-4 mb-8"}>
          <Button className={"w-24"}>income</Button>
          <Button className={"w-24"}>expense</Button>
        </div>
        <div className={" flex flex-col items-center  "}>
          <ReportList />
        </div>
      </div>
    </>
  );
}
