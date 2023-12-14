import React from "react";
import DesktopNavBar from "../DesktopNavBar/DesktopNavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import Logo from "../Logo/Logo";
const index = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 lg:px-0">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <svg className="block h-6 w-6">
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Logo />
              </div>
              <DesktopNavBar />
            </div>
          </div>
        </div>

        <MobileNavBar />
      </nav>
    </>
  );
};

export default index;
