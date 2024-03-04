import Image from "next/image";
import Link from "next/link";
import { Capitalize, SpaceRemover } from "@/lib/utils";
import { colors } from "@/lib/data";
import { StaticImageData } from "next/image";

type dataType = {
  data: {
    areas: string[];
  };
  link?: string;
  img?: StaticImageData[];
};

// colors[index % colors.length] is used to access the color from the colors array. % is the modulo operator, which gives the remainder of the division operation. So, index % colors.length will result in a number between 0 and colors.length - 1, effectively cycling through the colors array.

const CategorySlider = ({ data, link, img }: dataType) => {
  return (
    <div className="flex flex-row py-2 gap-3 overflow-x-auto scrollbar">
      {data?.areas.map((category, index) => (
        <Link
          href={`/${link}/${SpaceRemover(category)}`}
          className={`flex items-center justify-center flex-row gap-2 rounded py-3 px-8 ${
            colors[index % colors.length]
          }`}
          key={index}
        >
          <Image
            src={img ? img[index] : ""}
            alt="Picture of the author"
            width={60}
            height={60}
            className="rounded-full h-6 w-6"
          />

          <p>{Capitalize(category)}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategorySlider;
