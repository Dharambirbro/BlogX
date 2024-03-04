"use client";
import Link from "next/link";
import { useState } from "react";

const courseData = [
  {
    topic: "HTML Tutorial",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    topic: "HTML Tutorial",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
];

const Sidebar = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const handleClick = () => {
    console.log("llllllll");
    setSidebar(() => !sidebar);
  };
  return (
    <>
      <aside
        className={`text-nowrap min-w-60 h-[85vh] border border-black bg-quint-dark overflow-y-auto scrollbar dark:bg-text-dark ${
          sidebar ? "hidden" : ""
        }`}
      >
        <div className=" h-5 flex justify-end cursor-pointer">
          <span className=" w-5 h-5" onClick={handleClick}>
            X
          </span>
        </div>
        <nav className="py-3 flex flex-col">
          {courseData?.map((item, index) => {
            if (item.topic) {
              return (
                <h3 className="h5-semibold p-2" key={index}>
                  {item.topic}
                </h3>
              );
            } else if (item.title) {
              return (
                <Link
                  href="/"
                  className=" hover:bg-green-500 h5 py-1 px-2 dark:hover:bg-quart-dark "
                  key={index}
                >
                  {item.title}
                </Link>
              );
              return;
            }
          })}
        </nav>
      </aside>

      <aside className="h-[85vh] flex flex-col justify-center items-center">
        <div
          className={`rounded-full bg-yellow-50 h-10 min-w-10 text-center flex items-center justify-center text-black font-medium cursor-pointer ${
            sidebar ? "" : "hidden"
          }`}
          onClick={handleClick}
        >
          <span className="w-full">-{">"}</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
