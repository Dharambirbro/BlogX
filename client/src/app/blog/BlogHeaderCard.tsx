import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

type DataProps = {
  data: {
    status?: number;
    title: string;
    img: string | StaticImageData;
    link: string;
    desc: string;
    category: string;
  }[];
};

const BlogHeaderCard = ({ data }: DataProps) => {
  return (
    <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
      {data?.map((items, index) => {
        if (index == 0) {
          return (
            <Link
              className="flex flex-col gap-3 items-start"
              href={`/blog/${items.category}/${items.link}`}
              key={index}
            >
              <Image
                src={items.img}
                alt="Picture of the author"
                width={300}
                height={250}
                className="border-black border-2 bg-black w-full h-[70%] rounded-xl"
              />
              <h2 className="h4-semibold hover:underline">{items.title}</h2>
              <button className="px-2 py-1 border border-black rounded-3xl h7">
                {items.category}
              </button>
            </Link>
          );
        }
        return;
      })}
      {/* <Link
        className="flex flex-col gap-3 items-start"
        href={`/blog/${data[0].category}/${data[0].link}`}
      >
        <Image
          src={data[0].img}
          alt="Picture of the author"
          width={300}
          height={250}
          className="border-black border-2 bg-black w-full h-[70%] rounded-xl"
        />
        <h2 className="h4-semibold hover:underline">{data[0].title}</h2>
        <button className="px-2 py-1 border border-black rounded-3xl h7">
          {data[0].category}
        </button>
      </Link> */}

      <div className="flex flex-col lg:gap-3 max-md:gap-3">
        {data?.map((items, index) => {
          if (index == 0) return;
          return (
            <div className="flex flex-row gap-2 items-center" key={index}>
              <Image
                src={items.img}
                alt="Picture of the author"
                width={200}
                height={200}
                className="border-black border-2 bg-black rounded-xl h-44 min-w-40 object-contain"
              />
              <div className="flex flex-col gap-2 items-start">
                <Link
                  className="h5-semibold break-all hover:underline"
                  href={`/blog/${items.category}${items.link}`}
                >
                  {items.title}
                </Link>
                <p className="h7 break-all">{items.desc}</p>
                <Link
                  className="px-2 py-1 border border-black rounded-3xl h7"
                  href={`/blog/${items.category}`}
                >
                  {items.category}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogHeaderCard;
