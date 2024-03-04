"use client";
import { useLocalStorage } from "./custom/hooks";
import { useState, useEffect } from "react";

const RecentSearches = () => {
  const [searchItem, setSearchItem] = useState<string[]>([]);
  const [search, setSearch] = useLocalStorage<string[]>("search", []);
  useEffect(() => {
    setSearchItem(search);
  }, [search]);

  //   const handleClick = () => {
  //     useSearch(["bye", "hey"]);
  //   };

  return (
    <>
      {searchItem.length &&
        search?.map((item, index) => (
          <span
            className="py-2 px-6 rounded border w-min text-nowrap dark:bg-text-dark"
            key={index}
          >
            {item}
          </span>
        ))}

      {/* <div>
        <button onClick={handleClick}>Click me</button>
      </div> */}
    </>
  );
};

export default RecentSearches;
