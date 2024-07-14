import { getIncomeExpense } from "@/app/actions/getIncomeExpense";
import { addCommas } from "@/lib/utils";

const IncomeExpenseTabs = async () => {
  const { expense, income, error } = await getIncomeExpense();
  if (error) {
    return <p className="text-center">{error}</p>;
  }
  return (
    <div className="flex justify-center items-center text-center w-full gap-5 select-none">
      <div className="tab">
        <h4 className="text-green-600 uppercase font-medium">Income</h4>
        <p>$ {addCommas(income!) ?? 0}</p>
      </div>
      <div className="tab">
        <h4 className="text-red-600 uppercase font-medium">Expense</h4>
        <p>$ {addCommas(expense!) ?? 0}</p>
      </div>
    </div>
  );
};

export default IncomeExpenseTabs;
