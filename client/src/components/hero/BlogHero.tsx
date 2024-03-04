import { StaticImageData } from "next/image";

import Image from "next/image";

import hero from "@/public/hero.png";

type dataType = {
  data: {
    name: string;
    link: string;
    title: string;
    img: string | StaticImageData;
  };
};

const BlogHero = ({ data }: dataType) => {
  return (
    <div className="py-2 w-full relative max-[460px]:h-72">
      <Image
        src={data.img}
        alt="Picture of the author"
        width={300}
        height={250}
        className="border-black border-2 bg-black w-full h-full"
      />
      <div className="absolute bottom-0 text-white min-[460px]:px-6 h-full flex flex-col justify-between py-4">
        <div></div>
        <div className="px-8">
          <span className="h6-semibold">{data.link}</span>
          <h1 className="h2">{data.title}</h1>
        </div>
        <div className=" flex flex-row items-center justify-between h6-semibold px-2">
          <span>{data.name}</span>
          <span className="">what we Do</span>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
