import React from "react";
import Image from "next/image";
import Link from "next/link";

import Hook from "./hook.navBar";

/* Images */
import { logo } from "../../assets/common";

/* Routes */
import * as routes from "../../constants/routePaths";

/* UI Data */
import { navItems } from "../../constants/uiData";

const NavBar = () => {
  const [
    isHome,
    current,

    /* actions */

    handleNavActivate,
    navigateToHome
  ] = Hook();

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container py-4 flex justify-between items-center">
        <Image
          src={logo}
          alt="CINE logo"
          width={isHome ? 153 : 89}
          height={isHome ? 62 : 35.98}
          onClick={navigateToHome}
          className="cursor-pointer"
        />

        <ul className="nav-items flex list-none font-primary font-medium gap-x-4 p-0">
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => handleNavActivate(item)}
                className={`capitalize text-wah relative flex justify-center items-center`}
              >
                <Link
                  className="p-['15px']"
                  href={`/${item === "home" ? "" : item}`}
                >
                  {item}
                </Link>

                <span
                  className={`absolute bg-light h-[2px] origin-center rounded-md w-full bottom-2 transition-all ${
                    current === item ? "scale-x-100" : "scale-x-0"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
