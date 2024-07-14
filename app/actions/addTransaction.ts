"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

export const addTransaction = async (
  formData: FormData
): Promise<TransactionResult> => {
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");
  if (!textValue || textValue === "" || !amountValue) {
    return {
      error: "Text or amount is missing",
    };
  }

  const { userId } = auth();
  if (!userId) {
    return {
      error: "User not found!",
    };
  }

  const text: string = textValue.toString();
  const amount: number = parseFloat(amountValue.toString());
  try {
    const transactionData: TransactionData = await db.transaction.create({
      data: {
        amount,
        text,
        userId,
      },
    });
    revalidatePath("/");
    return {
      data: transactionData,
    };
  } catch (error) {
    return {
      error: "Transaction not added",
    };
  }
};
