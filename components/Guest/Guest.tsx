import { SignInButton } from "@clerk/nextjs";

function Guest() {
  return (
    <div className="flex flex-col pt-40 gap-5 items-center bg-slate-100 w-screen h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold uppercase">Welcome</h1>
        <p className="text-base mt-2 uppercase font-medium">
          Please Sign in to manage your expenses
        </p>
      </div>
      <div className="signInButton">
        <SignInButton />
      </div>
    </div>
  );
}

export default Guest;
