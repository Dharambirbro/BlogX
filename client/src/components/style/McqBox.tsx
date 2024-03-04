"use client";
import { useState } from "react";

const sampleData = {
  qn: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,adipisci? ",
  para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dolore harum cumque laudantium quod ab quis veritatis placeat. Sit, ex. ________",
  options: [
    "kdfnkdjjhjhvfgkdfg",
    "kdfnkdjfgkdfg",
    "llllkdfnkd jfgkdfg",
    "kdfnkdjfgio kdfg",
  ],
  ans: 2,
  explain: "",
};

const McqBox = () => {
  const [explanation, setExplanation] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean | null>(false);
  const [active, setActive] = useState(true);
  const [selected, setSelected] = useState<number[]>([]);

  const handleExplanation = () => {
    setExplanation((prev) => !prev);
  };

  const handleAnswer = (choose: number) => {
    if (!active || selected.includes(choose)) {
      return;
    }
    setSelected((prev) => {
      return [...prev, choose];
    });

    if (choose == sampleData.ans) {
      setCorrect(true);
      setActive(false);
    } else {
      setCorrect(false);
    }
    console.log(choose);
  };
  return (
    <div className="wrapper">
      <div className="border-2 border-black grid grid-cols-2 m-2">
        <span className="border-r-2 border-black p-2">
          <p>{sampleData.para}</p>
        </span>
        <span className="p-2">
          <div className=" h-10 bg-yellow-100 flex flex-row items-center gap-4">
            <span className=" bg-black text-white h-full w-10 flex justify-center items-center">
              1
            </span>
            <p>Mark for Review</p>
          </div>
          <p className="py-2">{sampleData.qn}</p>
          {/* options here  */}
          <ul className="space-y-2 pb-2 ">
            {sampleData.options.map((option, index) => (
              <li
                className={`border-2 border-black flex flex-row gap-2 hover:bg-slate-200 cursor-pointer
                ${correct ? "cursor-not-allowed" : ""}
              ${
                correct && index + 1 == sampleData.ans
                  ? "bg-green-300 hover:bg-green-300"
                  : selected.includes(index + 1)
                  ? "bg-red-400 hover:bg-red-400 cursor-not-allowed"
                  : ""
              }`}
                key={index + 1}
                onClick={() => handleAnswer(index + 1)}
              >
                <span className="border-r-2 w-8 flex justify-center items-center border-black">
                  {index + 1}
                </span>
                <p className="py-1">{option}</p>
              </li>
            ))}
          </ul>
        </span>
      </div>

      {/* answer explanation here  */}
      <div className="m-2 space-y-4">
        <button
          className=" underline text-blue-400"
          onClick={handleExplanation}
        >
          {explanation ? "Hide Explanation" : "Answer Explanation"}
        </button>

        <div className={`bg-slate-200 p-2 ${explanation ? "" : "hidden"}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            temporibus voluptates eaque aliquid voluptate atque assumenda nam
            ad, tenetur magnam!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
            eos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default McqBox;
