"use client";
import Link from "next/link";
import { useState, ChangeEvent } from "react";

const Footer = () => {
  const [input, setInput] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const CheckEmail = (input: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input)) {
      setIsValidEmail(false);
      return false;
    } else {
      setIsValidEmail(true);
      return true;
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    CheckEmail(e.target.value);
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setInput("");
    // Email validation using a simple regex
    if (CheckEmail(input)) {
      console.log("Email is valid:", input);
    } else {
      console.log("email is not valid");
    }
  };

  return (
    <div className=" bg-slate-200 flex items-center justify-center py-10">
      <form className=" text-center w-96 max-[460px]:w-72 text-black">
        <h4>Your inbox needs more</h4>
        <h4>BlogX.</h4>
        <input
          type="text"
          className={`w-96 p-3 my-4 rounded max-[460px]:w-72 ${
            isValidEmail ? " outline-green-600" : "outline-red-600"
          }`}
          onChange={handleChange}
          value={input}
          name="email"
        />
        <button
          className="text-white bg-black rounded px-4 py-2"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
        <p className="text-balance py-2">
          By clicking Submit you agree to receive marketing emails from blogX
          and to our{" "}
          <Link href="/about/privacy" className="underlind text-blue-600">
            Privacy Policy
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Footer;
