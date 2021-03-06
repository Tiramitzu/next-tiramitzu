import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const routes = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const router = useRouter();

  return (
    <header className="absolute top-0 z-50 w-full shadow-md bg-neutral-900">
      <nav className="py-2.5 px-2 rounded sm:px-4 bg-neutral-900 border-neutral-200">
        <div className="container flex flex-wrap justify-between items-center mx-auto w-full">
          <Link href="/">
            <a className="flex space-x-4">
              <Image
                src="/static/favicon.ico"
                className="rounded-full"
                alt="Tiramitzu"
                height="45"
                width="45"
              />
              <span className="self-center text-base font-semibold text-white whitespace-nowrap lg:text-lg">
                Tiramitzu
              </span>
            </a>
          </Link>
          <div className="flex -mr-2 md:hidden md:order-2">
            <button
              className="inline-flex justify-center items-center p-2 text-white rounded-md hover:text-gray-300 focus:outline-none"
              type="button"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-8 h-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
          <div
            className={`justify-between items-center w-full md:flex md:w-auto md:order-1 overflow-hidden md:overflow-visible ${
              isCollapsed ? "h-0" : "h-26"
            }`}
            id="list-mobile"
          >
            <ul className="flex flex-col mt-2 md:flex-row md:mt-0 md:space-x-2 md:text-sm md:font-medium">
              {routes.map((route) => (
                <li key={route.label}>
                  <Link href={route.href}>
                    <a
                      className={`block py-2 pr-4 pl-3 font-semibold hover:opacity-75 text-white ${
                        router.pathname === route.href
                          ? "text-violet-500 font-bold"
                          : ""
                      }`}
                    >
                      {route.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
