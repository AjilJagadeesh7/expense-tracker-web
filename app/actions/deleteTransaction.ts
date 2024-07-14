"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const deleteTransaction = async (
  transactionId: string
): Promise<{
  message?: string;
  error?: string;
}> => {
  const { userId } = auth();
  if (!userId) {
    return {
      error: "User not found",
    };
  }
  if (!transactionId) {
    return {
      error: "Transaction not found",
    };
  }
  try {
    await db.transaction.delete({
      where: {
        id: transactionId,
        userId,
      },
    });
    revalidatePath("/history");
    return {
      message: "Transaction deleted",
    };
  } catch (error) {
    return {
      error: "Could not fetch your balance",
    };
  }
};
