import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Market", href: "/markets", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { user, isLoggedIn, logoutUser } = useContext(AuthContext);

  const navigate = useNavigate();



  const market = () => {
    navigate("/markets");
  };

  const myHoldings = () => {
    navigate("/portfolio");
  };

  const signUpButton = () => {
    navigate("/signup");
  };

  const signInButton = () => {
    navigate("/login");
  };

  const profilePageButton = () => {
    navigate("/profilePage");
  };

  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-white"
                            : "text-gray-300 hover:bg-white hover:ring-white  hover:text-black",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <Link to={item.href}>{item.name}</Link>
                      </button>
                      
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full  text-sm  ring-2 hover:ring-white  ring-offset-2 ring-black  ring-offset-black">
                      <span className="sr-only">Open user menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 26"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="bg-white rounded-full  w-10 h-10"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md  bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {isLoggedIn && (
                        <Menu.Item>
                          {({ active }) => (
                            <p className="block px-4 py-2 text-md">
                              {" "}
                              Welcome {user.username}
                            </p>
                          )}
                        </Menu.Item>
                      )}
                      {isLoggedIn && (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={profilePageButton}
                              className={classNames(
                                active ? "font-semibold" : "",
                                "hover:bg-slate-100 block w-full px-4 text-start py-2 text-sm text-gray-700"
                              )}
                            >
                              My Profile
                            </button>
                          )}
                        </Menu.Item>
                      )}
                      {isLoggedIn && (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={myHoldings}
                              className={classNames(
                                active ? "font-semibold" : "",
                                "hover:bg-slate-100 block w-full px-4 text-start py-2 text-sm text-gray-700"
                              )}
                            >
                              My Holdings
                            </button>
                          )}
                        </Menu.Item>
                      )}

                      {!isLoggedIn && (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={signInButton}
                              className={classNames(
                                active ? "font-semibold" : "",
                                "hover:bg-slate-100 text-start block w-full px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Log in
                            </button>
                          )}
                        </Menu.Item>
                      )}

                      {!isLoggedIn && (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={signUpButton}
                              className={classNames(
                                active ? "font-semibold" : "",
                                "hover:bg-slate-100 text-start md:hidden lg:hidden w-full px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign Up
                            </button>
                          )}
                        </Menu.Item>
                      )}

                      {isLoggedIn && (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={logoutUser}
                              className={classNames(
                                active ? "hover:text-red-700" : "",
                                "hover:bg-slate-100 text-start block w-full px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Log out
                            </button>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
                <button
                  className="bg-white transition hidden md:block hover:scale-110 hover:bg-gray-100 py-2 px-4 rounded-full ml-3"
                  onClick={signUpButton}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? " text-white  hover:bg-white hover:text-black"
                      : "text-gray-300 hover:bg-white hover:text-black",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
