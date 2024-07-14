"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export const getIncomeExpense = async (): Promise<{
  income?: number;
  expense?: number;
  error?: string;
}> => {
  const { userId } = auth();
  if (!userId) {
    return {
      error: "User not found",
    };
  }
  try {
    const transaction = await db.transaction.findMany({
      where: { userId },
    });
    const income = transaction
      .filter((item) => item.amount >= 0)
      .reduce((sum, transaction) => sum + transaction.amount, 0);
    const expense = transaction
      .filter((item) => item.amount < 0)
      .reduce((sum, transaction) => sum + transaction.amount, 0);
    return {
      income,
      expense,
    };
  } catch (error) {
    return {
      error: "Could not fetch your balance",
    };
  }
};
