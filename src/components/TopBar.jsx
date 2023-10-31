// Import the necessary modules or assets if needed
// import Logo from "./assets/Logo.png"

import React from "react";

// Define a functional component called TopBar
const TopBar = () => {
  return (
    <>
      {/* Container for the top bar */}
      <div className=" shadow-md w-100% mx-5 h-15 pt-1 py-2 box-border block boder-2 rounded-sm shadow-2x1 w-140  ">
        <div className="md:px-13 py-1 px-7">
          <div className="">
            {/* Logo element */}
            <img
              src={process.env.PUBLIC_URL + "/images/Logo.png"}
              alt="Topbar Logo"
              className=" h-8 pl-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// Export the TopBar component for use in other parts of the application
export default TopBar;
