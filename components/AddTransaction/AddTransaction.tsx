"use client";

import { addTransaction } from "@/app/actions/addTransaction";
import { useRef } from "react";
import { toast } from "react-toastify";

function AddTransaction() {
  const formRef = useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    const { error } = await addTransaction(formData);
    if (error) {
      toast.error(error);
    } else {
      toast.success("Transaction added succesfully");
      formRef.current?.reset();
    }
  };
  return (
    <div className="mt-10 select-none w-full flex flex-col  items-center ">
      <h3 className="font-semibold text-xl text-center">Add Transaction</h3>
      <div className="h-[0.5px] mt-5 bg-stone-300 w-96" />
      <form ref={formRef} action={clientAction} className="mt-10">
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter description..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">
            Amount (negative - expesne, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount..."
            step={0.01}
          />
        </div>
        <button className="">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
