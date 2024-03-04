import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { DateConvert } from "@/lib/utils";

type DataProps = {
  data: {
    title: string;
    date?: string;
    img: string | StaticImageData;
    link: string;
    category?: string;
  }[];
};

const CardLists = ({ data }: DataProps) => {
  return (
    <div className="grid grid-cols-3 gap-x-3 gap-y-7 max-sm:grid-cols-2 max-[460px]:grid-cols-1">
      {data?.map((item, index) => (
        <Link
          className="w-full flex flex-col items-start gap-2"
          href={`/blog/${item.category}${item.link}`}
          key={index}
        >
          <Image
            src={item.img}
            alt="Picture of the author"
            width={300}
            height={250}
            className="border-black border-2 w-full h-60 bg-black rounded-xl"
          />
          <div className={`${!item.date ? "text-center w-full" : ""}`}>
            <h2 className="h5-semibold py-2 hover:underline">{item.title}</h2>
            {item.date && (
              <span className="h7 border border-black rounded-xl p-1">
                {DateConvert(item.date)}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardLists;
