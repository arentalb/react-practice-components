import { ScrollArea } from "@/components/ui/scroll-area.jsx";
import { Report } from "@/components/report/Report.jsx";

export function ReportList() {
  return (
    <div className={"flex flex-col min-w-80 gap-4"}>
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4 ">
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
        <Report />
      </ScrollArea>
    </div>
  );
}
