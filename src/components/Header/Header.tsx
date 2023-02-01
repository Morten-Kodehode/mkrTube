import { useState } from "react";
// import { User } from "./User/User";
import { Login } from "./Login/Login";
import { Search } from "./Search/Search";

export function Header() {
  return (
    <div className="h-20">
      <Login />
      {/* <Search /> */}
      {/* <User /> */}
    </div>
  );
}
