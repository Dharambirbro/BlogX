import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { Capitalize } from "@/lib/utils";

type dataProps = {
  data: {
    title: string;
    img: string | StaticImageData;
    category: string;
    desc: string;
    link: string;
  }[];
};
function CardSlider({ data }: dataProps) {
  return (
    <div className="flex flex-row gap-3 overflow-x-auto scrollbar py-2 max-w-full">
      {data?.map((items, index) => {
        return (
          <div
            className="min-w-[275px] w-[275px] border-border-primary border-[0.5px] dark:bg-text-dark rounded"
            key={index}
          >
            <Image
              src={items.img}
              alt="Picture of the author"
              width={300}
              height={300}
              className=" bg-black min-h-52 max-h-52 rounded-t object-contain"
            />
            <div className="p-1 tracking-tighter flex flex-col gap-1">
              <Link
                className="h5-bold hover:underline line-clamp-3 "
                href={`/blog/${items.category}${items.link}`}
              >
                {items.title}
              </Link>
              <Link
                className="h7-semibold py-1 hover:underline"
                href={`/blog/${items.category}`}
              >
                {Capitalize(items.category)}
              </Link>
              <p className="line-clamp-4 break-words h7">{items.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardSlider;
