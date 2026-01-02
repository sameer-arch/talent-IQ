import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignOutButton,
} from "@clerk/clerk-react";

function App() {
  return (
    <>
      <h1>Welcome to the app</h1>
      <header>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="">Login</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
        <UserButton />
      </header>
    </>
  );
}

export default App;
