import{ useState } from "react";

export function Login() {
  const [Open, setOpen] = useState(false);
  const [form, setForm] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormToggle = () => {
    setForm(form === "login" ? "register" : "login");
  };
  const handleLogin = (e:any) => {
    e.preventDefault();
  };
  const handleRegister = (e:any) => {
    e.preventDefault();
  };
  return (
    <div className="relative top-0 mb-2">
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 p-5 rounded w-38" onClick={() => setOpen(!Open)}>
        {form === "login" ? "Login" : "Register"}
      </button>
      {Open && (
        <div className="absolute">
          {form === "login" ? (
            <form className="bg-white" onSubmit={handleLogin}>
              <button className="p-1 rounded mr-3 mt-2 border-solid border-2 w-30" type="button" onClick={handleFormToggle}>
                Register
              </button>
              <input className="py-2 rounded mr-2 border-solid border-2"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input className="py-2 rounded mr-2 border-solid border-2"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
             <button className="p-1 rounded mr-3 mt-2 border-solid border-2 active:scale-95" type="submit">Submit</button>
            </form>
          ) : (
            <form className="bg-white rounded" onSubmit={handleRegister}>
              <button className="p-1 rounded mr-3 mt-2 border-solid border-2 w-30"  type="button" onClick={handleFormToggle}>
                Login
              </button>
              <input
                className="py-2 rounded mr-2 border-solid border-2"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="py-2 rounded mr-2 border-solid border-2"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
             <button className="p-1 rounded mr-3 mt-2 border-solid border-2 active:scale-95"  type="submit">Submit</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

