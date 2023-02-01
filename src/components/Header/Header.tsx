import { useState } from "react";
import { User } from "./User/User";
import { Login } from "./Login/Login";
import { Search } from "./Search/Search";

export function Header() {
  return (
    <div className="h-auto border-solid border-2 flex justify-between">
      <Login />
      <Search />
      <User />

    </div>
  );
}
