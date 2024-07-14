import { Transaction } from "@/types/transaction";
import { getTransaction } from "../actions/getTransactions";
import TransactionItem from "@/components/TransactionItem/TransactionItem";

const History = async () => {
  const { transactions } = await getTransaction();

  return (
    <div className="w-screen pt-10 bg-stone-300 h-screen flex flex-col items-center">
      <h2 className="text-2xl uppercase font-medium mb-2">History</h2>
      <div className="h-[0.5px] bg-slate-400 w-96 mb-10" />
      <ul className="text-left w-96">
        {transactions &&
          transactions.map((transaction: Transaction, key: number) => (
            <TransactionItem transaction={transaction} key={key} />
          ))}
      </ul>
    </div>
  );
};

export default History;
