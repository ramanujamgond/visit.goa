"use client";
import Image from "next/image";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between w-full p-4 bg-white bg-opacity-20 backdrop-blur-md border-b border-white border-opacity-30 shadow-lg z-50">
        <div className="relative w-[130px] h-[26px]">
          <Image
            src="/bharatStayLogo.png"
            alt="Bharat Stay Logo"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <ul className="flex gap-12">
            <Link href="/">
              <li
                className={`text-sm font-bold ${
                  pathName === "/" ? styles.active_nav : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`text-sm font-bold ${
                  pathName === "/about" ? styles.active_nav : ""
                }`}
              >
                About
              </li>
            </Link>
            <Link href="/contact">
              <li
                className={`text-sm font-bold ${
                  pathName === "/contact" ? styles.active_nav : ""
                }`}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.login_wrapper}>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
