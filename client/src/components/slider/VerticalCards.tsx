import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

type dataProps = {
  data: {
    title: string;
    img: string | StaticImageData;
    category: string;
    desc: string;
    link: string;
    date: string;
  }[];
};

const VerticalCards = ({ data }: dataProps) => {
  return (
    <>
      {data?.map((items, index) => (
        <div
          className="grid grid-cols-2 gap-8 justify-center max-[460px]:grid-cols-1 max-[460px]:gap-1 min-h-72"
          key={index}
        >
          <Image
            src={items.img}
            alt="Picture of the author"
            width={500}
            height={500}
            className="border-2 border-black h-full object-contain max-h-72 dark:border-border-primary dark:bg-text-dark"
          />
          <div className="flex flex-col gap-4 items-start">
            <p>
              {items.date.slice(0, 10)}
              <span className="px-4 text-red-500">{items.category}</span>
            </p>
            <h3 className="max-sm:text-2xl">{items.title}</h3>
            <p className="line-clamp-2 break-all">{items.desc}</p>
            <button>
              <Link
                href={`/blog/${items.category}${items.link}`}
                className="underline"
              >
                Read More
              </Link>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default VerticalCards;
