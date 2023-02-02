import { useState } from "react";

export function Login() {
  const [Open, setOpen] = useState(false);
  // state to open og close the login menu.
  const [form, setForm] = useState("login");
  // this switches between the login menu and the registration menu.
  const [username, setUsername] = useState("");
  // state to keep hold of the username.
  const [password, setPassword] = useState("");
  // state to keep hold of the password.

  const handleFormToggle = () => {
    setForm(form === "login" ? "register" : "login");
  };
  // first gives you the login menu. if its the login menu showing and you click it again it switches to the registration menu.
  const handleLogin = (e: any) => {
    e.preventDefault();
  };
  const handleRegister = (e: any) => {
    e.preventDefault();
  };
  // this is to handle the login or the register.

  return (
    <div className="relative top-0 l-1">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 p-5 rounded w-38 active:scale-95 w-40"
        onClick={() => setOpen(!Open)}
      >
        {form === "login" ? "Login" : "Register"}
      </button>
      {/* main Login-button to open the menu.  */}
      {Open && (
        <div className="absolute">
          {form === "login" ? (
            <form
              className="bg-white rounded-lg shadow-xl p-2 block"
              onSubmit={handleLogin}
            >
              <button
                className="block px-4 py-2 text-sm hover:bg-red-300 rounded"
                type="button"
                onClick={handleFormToggle}
              >
                {/* main Register button to switch to the register menu. */}
                Register
              </button>
              <input
                className="block px-4 py-2 text-sm hover:bg-red-300"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="block px-4 py-2 text-sm hover:bg-red-300"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="block px-4 py-2 text-sm hover:bg-red-300 active:scale-95"
                type="submit"
              >
                Submit
              </button>
            </form>
          ) : (
            <form
              className="bg-white py-2 p-5 rounded w-38 active:scale-95"
              onSubmit={handleRegister}
            >
              <button
                className="block px-4 py-2 text-sm hover:bg-red-300"
                type="button"
                onClick={handleFormToggle}
              >
                Login
              </button>
              <input
                className="block px-4 py-2 text-sm hover:bg-red-300"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="block px-4 py-2 text-sm hover:bg-red-300"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="block px-4 py-2 text-sm hover:bg-red-300"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
