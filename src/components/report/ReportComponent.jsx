import { ReportChart } from "@/components/report/ReportChart.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ReportList } from "@/components/report/ReportList.jsx";
import { useEffect, useState } from "react";

export function ReportComponent({ transactions }) {
  const [reportList, setReportList] = useState([]);

  function calculateIncome() {
    setReportList(calculateReport(transactions, "income"));
  }

  function calculateExpense() {
    setReportList(calculateReport(transactions, "expense"));
  }

  useEffect(function () {
    calculateIncome();
  }, []);

  return (
    <div className={" flex justify-center  flex-col items-center "}>
      <div className={"h-52 w-full flex mb-8 justify-center "}>
        {reportList.length > 0 ? (
          <ReportChart reportList={reportList} />
        ) : (
          <h1 className={"text-center text-4xl mb-20"}>
            there is no data to show{" "}
          </h1>
        )}
      </div>
      <div>
        <div className={"flex justify-center gap-4 mb-4"}>
          <Button className={"w-24"} onClick={calculateIncome}>
            income
          </Button>
          <Button className={"w-24"} onClick={calculateExpense}>
            expense
          </Button>
        </div>
        <div className={" flex flex-col items-center  "}>
          <ReportList reportList={reportList} />
        </div>
      </div>
    </div>
  );
}

function calculateReport(transactions, type) {
  const filtered = transactions.filter((tra) => {
    return tra.type === type;
  });
  const categoryTotals = filtered.reduce((totals, currentObject) => {
    const { amount, category } = currentObject;
    const numericAmount = parseInt(amount, 10);
    if (totals[category]) {
      totals[category] += numericAmount;
    } else {
      totals[category] = numericAmount;
    }

    return totals;
  }, {});

  const arrayOfCategoryObjects = Object.entries(categoryTotals).map(
    ([category, totalAmount]) => ({
      category,
      totalAmount,
    }),
  );
  //0:{category: "home", totalAmount: 20}

  return arrayOfCategoryObjects;
}
