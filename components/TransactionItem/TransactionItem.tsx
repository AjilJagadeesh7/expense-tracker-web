"use client";

import { deleteTransaction } from "@/app/actions/deleteTransaction";
import { addCommas } from "@/lib/utils";
import { Transaction } from "@/types/transaction";
import { useState } from "react";
import { toast } from "react-toastify";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const [selectedTransaction, setSelectedTransaction] =
    useState<boolean>(false);

  const handleDeleteTransaction = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this transaction ?"
    );
    if (!confirm) {
      return;
    }

    const { message, error } = await deleteTransaction(transaction.id);
    if (error) {
      toast.error(error);
    } else {
      toast.success(message);
    }
  };

  return (
    <div className=" transaction-container flex items-start mb-2 rounded-md bg-red-600">
      <li
        className={`transaction-item cursor-pointer ${
          transaction.amount > 0 ? "plus" : "minus"
        } `}
        onClick={() => setSelectedTransaction(!selectedTransaction)}
      >
        {transaction.text}
        <span>{addCommas(transaction.amount)} $</span>
      </li>

      <button
        className="delete-button h-10 w-16 bg-transparent mr-3 text-white font-medium uppercase text-sm text-center "
        onClick={() => handleDeleteTransaction()}
      >
        Delete
      </button>
    </div>
  );
};

export default TransactionItem;
