import { getUserBalance } from "@/app/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();
  return (
    <div className="text-center my-5">
      <h4 className="text-xl font-medium">Your Balance</h4>
      <h1 className="text-2xl font-medium text-green-700">
        $ {addCommas(balance!) ?? 0}
      </h1>
    </div>
  );
};

export default Balance;
