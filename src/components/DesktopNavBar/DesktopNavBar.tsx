import Link from "next/link";
import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
const NavBar = () => {
  const router = useRouter();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState(false);
  useEffect(() => {
    const cookieLogged = cookie.get("jwttoken");
    if (cookieLogged) {
      setLoggedIn(true);
      const userDataString = localStorage.getItem("userData");
      const userData = userDataString ? JSON.parse(userDataString) : null;
      if (userData && userData.user.fullName) {
        setUserName(userData.user.fullName);
      }
    }
  }, []);
  const onLogout = () => {
    cookie.remove("jwttoken");
    router.push("/login");
  };
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        <Link
          href="/locations"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          Locations
        </Link>
        <Link
          href="/random"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          Random locations
        </Link>

        {!isLoggedIn && (
          <Link
            href="/login"
            className="text-gray-300 bg-white-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Login
          </Link>
        )}

        {isLoggedIn && (
          <div className="flex items-center">
            <span className="text-white pr-3">{userName},</span>
            <button
              onClick={onLogout}
              className="text-white bg-gray-700 rounded-md px-3 py-2 text-sm font-medium hover:bg-red-400"
            >
              Logout
            </button>
          </div>
        )}
        {isLoggedIn && (
          <Link
            href="/add-location"
            className="text-gray-800 bg-green-500 hover:bg-green-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Add location
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
