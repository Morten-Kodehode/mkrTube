// import { useState } from "react";

// export function User() {
//   const [showLogin, setShowLogin] = useState(false);
//   return (
//     <div className="col-start-10 flex flex-row-reverse">
//       <button
//         className="mr-10 border-solid border-2 p-2  rounded"
//         onClick={() => {
//           setShowLogin(!showLogin);
//         }}
//       >
//         {/* this is the Login button, it hides the two input fields for username and password with useState while the state is false.
//         clicking the button turns it into true and reveals the input fields below */}
//         User
//       </button>
//       <div>
//         {showLogin && (
//           <div className="flex flex-col">
//             <button className="border-solid border-2">settings</button>
//             <button className="border-solid border-2">Log Out</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
