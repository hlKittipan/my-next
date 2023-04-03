import React, { useEffect, useState } from "react";
import Link from "next/link";
import UserMenu from "@components/Layout/UserMenu";
import SignInButton from "@components/User/Form/SignIn";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsAuthed,
  getToken,
  getUser,
  resetUser,
  setIsAuthed,
  setToken,
  setUserData,
} from "@stores/slices/user";
import { getCookieValue } from "@helpers/cookies";
import appConfigs from "@configs/app";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthed = useSelector(getIsAuthed);
  const users = useSelector(getUser);
  const token = useSelector(getToken);

  useEffect(() => {
    const fetchData = async () => {
      const token = await getCookieValue(null, appConfigs.authTokenKey);
      const user = await getCookieValue(null, appConfigs.userDataKey);
      if (token && user) {
        dispatch(setIsAuthed(true));
        dispatch(setToken(token));
        dispatch(setUserData(JSON.parse(user)));
      }
    };
    fetchData();
  }, [dispatch]);

  const signOut = () => {
    dispatch(setIsAuthed(false));
    dispatch(resetUser());
  };

  return (
    <nav className="z-10 w-full bg-gray-900 shadow">
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <a href="#">
              <h2 className="text-2xl font-bold text-white">NEXT JS</h2>
            </a>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="font-bold text-white hover:text-fuchsia-600">
                <Link href="/">Home</Link>
              </li>
              <li className="font-bold text-white hover:text-fuchsia-600">
                <Link href="/blog">Blogs</Link>
              </li>
              <li className="font-bold text-white hover:text-fuchsia-600">
                <Link href="/about">About US</Link>
              </li>
              <li className="font-bold text-white hover:text-fuchsia-600">
                <Link href="/contact">Contact US</Link>
              </li>
              {!isAuthed && (
                <li className="text-white">
                  <SignInButton isModal={true} />
                </li>
              )}
              {isAuthed && (
                <li>
                  <UserMenu signOut={signOut} />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
