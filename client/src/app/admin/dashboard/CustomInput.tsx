"use client";

import { useState } from "react";

const number = 1;
const CustomInput = () => {
  const [titleInput, setTitleInput] = useState([number]);
  const handleAdd = () => {
    setTitleInput([...titleInput, number + 1]);
  };
  const handleRemove = () => {
    const newarr = titleInput.slice(0, -1);
    setTitleInput(newarr);
  };
  return (
    <>
      {titleInput?.map((value, index) => (
        <input
          key={index}
          type="text"
          className="border border-black p-2"
          name="Add_titles"
        />
      ))}

      <button
        className="border border-black rounded-full h-8 w-8 text-3xl text-center"
        onClick={handleAdd}
      >
        +
      </button>
      <button
        className="border border-black rounded-full h-8 w-8 text-3xl text-center"
        onClick={handleRemove}
      >
        -
      </button>
    </>
  );
};

export default CustomInput;
