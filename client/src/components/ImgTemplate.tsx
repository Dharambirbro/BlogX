import Image from "next/image";

import Link from "next/link";
import { StaticImageData } from "next/image";

type TemplatedataProps = {
  data: {
    title: string;
    desc: string;
    link: string;
    img: string | StaticImageData;
  };
};

const ImgTemplate = ({ data }: TemplatedataProps) => {
  return (
    <div className=" relative lg:mx-10">
      <Image
        src={data.img}
        alt="Picture of the author"
        width={500}
        height={500}
        className="bg-black w-full rounded-t-2xl max-[460px]:h-60"
      />
      <div className="absolute text-white w-full bottom-0 h-full xl:p-14">
        <div className="flex flex-col gap-4 w-full h-full p-3 justify-end xl:gap-8">
          <h1 className="h2-bold">{data.title}</h1>
          <h6 className="h5-bold">{data.desc}</h6>
          <button className=" self-start pb-3">
            <Link
              className="border-2 border-white rounded-3xl px-6 py-4 max-md:px-2 max-md:py-1"
              href={data.link}
            >
              Read more
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImgTemplate;
