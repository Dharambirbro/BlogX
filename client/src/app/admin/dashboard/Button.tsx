"use client";
import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        className="border border-black p-2 self-center"
        disabled={pending}
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
    </>
  );
};

export default Button;
