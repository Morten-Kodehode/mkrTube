import React, { useState } from "react";

export function User() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative top-0 right-0">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 p-5 rounded w-38 active:scale-95"
        onClick={() => setShowMenu(!showMenu)}
      >
        User
        {/* button for the User menu, needs to be fixed to only show if the user is logged in and confirmed by the server. 
        uses states to show/hide the menu. also needs directions for the buttons to be added. 
        */}
      </button>
      {showMenu && (
        <div className="absolute right-0 mt-2 py-2  bg-white rounded-lg shadow-xl">
          <a
            href="#"
            className="block px-4 py-2 text-sm hover:bg-red-300"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm hover:bg-red-300"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm hover:bg-red-300"
          >
            Sign Out
          </a>
        </div>
      )}
    </div>
  );
}

