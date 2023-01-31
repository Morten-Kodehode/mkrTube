import { User } from "./User/User";
import { Login } from "./Login/Login";
import { Search } from "./Search/Search";

export function Header() {
  return (
    <div className="flex flex-row justify-between p-4 border-solid border-2 border-grey">
      <Search />
      <div className="flex flex-row w-1/5 justify-between">
        <Login />
        <User />
      </div>
    </div>
  );
}
