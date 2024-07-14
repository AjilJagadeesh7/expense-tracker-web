import { checkUser } from "@/lib/checkUser";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = async () => {
  const user = await checkUser();

  return (
    <nav className="w-screen py-5 px-4 bg-slate-800">
      <div className="flex w-full justify-between items-center text-white font-medium select-none ">
        <h2 className="text-2xl">Expense Tracker</h2>
        <div>
          <SignedOut>
            <div className="signInButton">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <div>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
