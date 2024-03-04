import Image from "next/image";
import Link from "next/link";
type dataProps = {
  data: {
    title: string;
    img: string;
    category: string;
    desc: string;
    link: string;
  }[];
};

const CardSlider2 = ({ data }: dataProps) => {
  return (
    <div className="flex flex-row gap-4 w-full overflow-x-auto scrollbar pb-2 snap-mandatory snap-x">
      {data?.map((item, index) => (
        <div
          className="min-w-72 w-72 flex flex-col gap-2 shadow-md snap-start"
          key={index}
        >
          <Image
            src={item.img}
            alt="Picture of the author"
            width={300}
            height={250}
            className=" bg-black rounded-lg w-full h-44"
          />

          <Link
            className="h5-bold hover:underline"
            href={`/blog/${item.category}${item.link}`}
          >
            {item.title}
          </Link>
          <p className=" line-clamp-3 h7">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSlider2;
