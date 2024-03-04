"use client";
import Image from "next/image";
import React from "react";
import hero from "@/public/hero.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLocalStorage } from "@/components/custom/hooks";

import { downArrow, darkMode, hamburger } from "@/public/index";

const coursesData = [
  {
    name: "Web development",
    link: "./",
  },
  {
    name: "Learning",
    link: "./",
  },
  {
    name: "Programming",
    link: "./",
  },
  {
    name: "Web development",
    link: "./",
  },
  {
    name: "Web development",
    link: "./",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [localTheme, setLocalTheme] = useLocalStorage<string>("theme", "light");
  useEffect(() => {
    if (localTheme == "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [localTheme]);

  const handleTheme = () => {
    if (localTheme == "light") {
      setLocalTheme("dark");
    } else {
      setLocalTheme("light");
    }
  };
  function handleClick(
    e: React.MouseEvent<
      HTMLImageElement | HTMLButtonElement,
      globalThis.MouseEvent
    >
  ) {
    e.preventDefault();
    setToggle(!toggle);
  }
  return (
    <>
      {/* mobile device nav bar  */}
      {toggle && (
        <div className="w-full h-[640px] bg-[rgba(0, 0, 0, 0.6)] absolute top-0 left-0 md:hidden">
          <div className="flex flex-col bg-white border-2 border-black w-[70%] h-[640px]">
            <div className="flex w-full justify-end px-4 py-2">
              <button onClick={handleClick}>X</button>
            </div>
            {/* sign in and dark mode  */}
            <div className="flex flex-col gap-4 py-4 border-b-[1px] border-black w-full">
              <span className="bg-black text-white rounded-3xl py-2 mx-4 text-center ">
                Sign in
              </span>
              <span className="hover:bg-slate-300 rounded-lg px-4">
                <Image
                  src={darkMode}
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className=" h-10 w-10 cursor-pointer"
                  onClick={handleTheme}
                />
              </span>
            </div>

            {/* links for navigation  */}
            <Link href="/" className="hover:bg-slate-100 rounded-3xl py-2 px-4">
              Home
            </Link>

            <div className="grid grid-cols-2 justify-between hover:bg-slate-100 px-4 py-2">
              <Link href="/courses" className="w-full rounded-3xl">
                Courses
              </Link>
              <Image
                src={downArrow}
                alt="Picture of the author"
                width={60}
                height={60}
                className=" h-8 w-8 rotate-180 font-bold hover:bg-slate-300 rounded-lg hover:rotate-0 justify-self-end peer"
              />
              <div className="hidden flex-col bg-slate-300 gap-2 col-span-2 peer-hover:flex">
                {coursesData?.map((items, index) => (
                  <Link
                    href={items.link}
                    className="pl-10 hover:bg-blue-500 "
                    key={index}
                  >
                    {items.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/blog"
              className="hover:bg-slate-100 rounded-3xl py-2 px-4"
            >
              Blog
            </Link>

            <Link
              href="/about/blogX"
              className="hover:bg-slate-100 rounded-3xl py-2 px-4"
            >
              About
            </Link>
          </div>
        </div>
      )}

      <nav className="flex items-center justify-between wrapper py-2">
        {/* smaller device ham burger  */}
        <div className="md:hidden">
          <Image
            src={hamburger}
            alt="Picture of the author"
            width={60}
            height={60}
            className=" h-8 w-8"
            onClick={handleClick}
          />
        </div>

        {/* logo with the name  */}
        <div className="flex items-center gap-2">
          <Image
            src={hero}
            alt="Picture of the author"
            width={60}
            height={60}
            placeholder="blur"
            className="rounded-full h-10 w-10"
          />
          <h4 className="dark:text-white">BlogX</h4>
        </div>
        {/* navigation bar  */}
        <div className="flex gap-1 font-semibold text-lg max-md:hidden">
          <Link
            href="/"
            className="hover:bg-slate-100 rounded-3xl py-2 px-4 dark:hover:bg-text-dark"
          >
            Home
          </Link>

          <div className="flex flex-row hover:bg-slate-100 rounded-3xl py-2 px-4 items-center gap-1 relative group cursor-pointer dark:hover:bg-text-dark">
            <Link href="/courses" className="">
              Courses
            </Link>
            <Image
              src={downArrow}
              alt="Picture of the author"
              width={60}
              height={60}
              className="h-6 w-6 rotate-180 font-bold hover:bg-slate-300 rounded-lg hover:rotate-0 delay-150 dark:hover:bg-quart-dark"
            />

            {/* nested route for course  */}
            <div className="absolute h-80 bg-white border w-60 overflow-y-auto top-full left-0 invisible group-hover:visible scrollbar dark:bg-text-dark dark:border-border-primary">
              <div className="flex flex-col py-3">
                {coursesData?.map((items, index) => (
                  <Link
                    href={items.link}
                    className="px-4 hover:bg-blue-500 py-1 dark:hover:bg-quart-dark"
                    key={index}
                  >
                    {items.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/blog"
            className="hover:bg-slate-100 rounded-3xl py-2 px-4 dark:hover:bg-text-dark"
          >
            Blog
          </Link>

          <Link
            href="/about/blogX"
            className="hover:bg-slate-100 rounded-3xl py-2 px-4 dark:hover:bg-text-dark"
          >
            About
          </Link>
        </div>
        {/* theme and sign in  */}
        <div className="flex gap-3 items-center max-md:hidden">
          <span className="hover:bg-slate-300 rounded-lg dark:hover:bg-text-dark">
            <Image
              src={darkMode}
              alt="Picture of the author"
              width={200}
              height={200}
              className=" h-10 w-10 cursor-pointer"
              onClick={handleTheme}
            />
          </span>
          <span className="bg-black text-white rounded-3xl px-4 py-2 dark:bg-[#e5ffb2] dark:text-black">
            Sign in
          </span>
        </div>
        <div className="md:hidden"></div>
      </nav>
    </>
  );
};

export default Navbar;
