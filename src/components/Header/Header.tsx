import { User } from "./User/User";
import { Login } from "./Login/Login";
import { Search } from "./Search/Search";

export function Header() {
  return (
    <div className="grid grid-cols-10 grid-rows-1 h-20 items-center justify-center border-solid border-2">
      <Search />
      <Login />
      <User />
    </div>
  );
}
