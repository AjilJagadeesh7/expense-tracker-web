import AddTransaction from "@/components/AddTransaction/AddTransaction";
import Balance from "@/components/Balance/Balance";
import Guest from "@/components/Guest/Guest";
import IncomeExpenseTabs from "@/components/IncomeExpense/IncomeExpenseTabs";
import { currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <main className="px-4 w-screen mt-10  ">
      <div className="text-center text-xl font-semibold uppercase">
        Welcome {user.firstName}
      </div>
      <Balance />
      <IncomeExpenseTabs />
      <AddTransaction />
    </main>
  );
};

export default HomePage;
