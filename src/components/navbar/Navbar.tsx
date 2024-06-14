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
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between w-full py-4 px-8 bg-white bg-opacity-20 backdrop-blur-md border-b border-white border-opacity-30 shadow-lg z-[1200]">
        <Link href="/">
          <div className="relative w-[130px] h-[26px]">
            <Image
              src="/bharat_stay_logo.png"
              alt="Bharat Stay Logo"
              fill
              className="object-cover"
              sizes="auto"
              loading="lazy"
            />
          </div>
        </Link>
        <div>
          <ul className="flex gap-12">
            <Link href="/">
              <li
                className={`text-sm font-bold hover:text-[#ff6535] hover:[transition:color_0.3s_ease,_background-color_0.3s_ease] ${
                  pathName === "/" ? styles.active_nav : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`text-sm font-bold hover:text-[#ff6535] hover:[transition:color_0.3s_ease,_background-color_0.3s_ease] ${
                  pathName === "/about" ? styles.active_nav : ""
                }`}
              >
                About
              </li>
            </Link>
            <Link href="/contact">
              <li
                className={`text-sm font-bold hover:text-[#ff6535] hover:[transition:color_0.3s_ease,_background-color_0.3s_ease] ${
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
