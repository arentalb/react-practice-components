import { ScrollArea } from "@/components/ui/scroll-area.jsx";
import { Report } from "@/components/report/Report.jsx";
import { useEffect, useState } from "react";

export function ReportList({ reportList }) {
  const [total, setTotal] = useState();

  useEffect(
    function () {
      setTotal(
        reportList.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.totalAmount;
        }, 0),
      );
    },
    [reportList],
  );
  return (
    <div className={"flex flex-col min-w-80 gap-4"}>
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4 ">
        {reportList.map((report) => (
          <Report report={report} total={total} key={report.category} />
        ))}
      </ScrollArea>
    </div>
  );
}
