import PageLinks from "./PageLinks";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import Link from "next/link";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    gsap.to(header, {
      opacity: 1,
      y: 80,
      delay: 2.5,
      ease: "power.in",
    });
  }, []);

  return (
    <header
      className="fixed w-[100vw] top-[-80px] left-0 flex justify-between items-center px-[8vw] h-[80px] bg-iLight z-[999]"
      ref={headerRef}
    >
      <div className="logo">
        <h1 className="text-xl font-bold">iffi</h1>
      </div>

      <form action="#">
        <input
          className="w-[200px] rounded-full px-4 py-1 border-iDark border-[1px]"
          type="text"
          placeholder="Search"
        />
        <button className="ml-[-30px]" type="submit">
          <FaSearch />
        </button>
      </form>

      <HiMenuAlt2 className="block lg:hidden" size={25} />

      <nav className="hidden lg:block">
        <ul className="gap-[2em] flex">
          <PageLinks pageLink="#" title="Home" />
          <PageLinks pageLink="#" title="Programme" />
          <PageLinks pageLink="#" title="The Bazaar" />
          <PageLinks pageLink="#" title="Take Part" />
          <li>
            <Link
              href="#"
              className="flex items-center gap-1 text-iDark  text-base font-medium rounded-full font-helveticaLight"
            >
              <FaUserCircle />
              Log In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
