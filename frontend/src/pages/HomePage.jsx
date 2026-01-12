import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import React from "react";
import axiosInstance from "../lib/axios";

function HomePage() {
  axiosInstance
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <UserButton />
    </div>
  );
}

export default HomePage;
