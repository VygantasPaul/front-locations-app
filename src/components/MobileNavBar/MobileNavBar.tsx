import React from "react";
import Link from "next/link";
const MobileNavBar = () => {
  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <Link
          href="/"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          Locations
        </Link>
        <Link
          href="/add-location"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          Add location
        </Link>
      </div>
    </div>
  );
};

export default MobileNavBar;
