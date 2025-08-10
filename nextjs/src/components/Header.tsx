import React from "react";
import CurrentUser from "./CurrentUser";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="flex border-b-2 border-amber-400 mb-1 justify-end items-center p-4 gap-4 h-16">
      <CurrentUser />
      <SignedOut>
        <SignInButton>Einloggen</SignInButton>
        <SignUpButton>
          <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Registrieren
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
