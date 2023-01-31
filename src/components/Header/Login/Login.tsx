import { useState } from "react";
export function Login() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="col-start-7 col-span-1 flex">
      <button
        className="mr-4 border-solid border-2 p-5  rounded"
        onClick={() => {
          setShowLogin(!showLogin);
        }}
      >
        {/* this is the Login button, it hides the two input fields for username and password with useState while the state is false.
        clicking the button turns it into true and reveals the input fields below */}
        Login
      </button>
      <div>
        {showLogin && (
          <div className="">
            <input
              className="border-solid border-2 rounded m-1"
              type="string"
              placeholder="Username"
            ></input>
            <input
              className="border-solid border-2 rounded m-1"
              placeholder="Password"
            ></input>
          </div>
        )}
      </div>
    </div>
  );
}
