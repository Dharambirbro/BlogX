import Image from "next/image";
import hero from "@/public/hero.png";
import Link from "next/link";
import { Capitalize } from "@/lib/utils";

type dataType = {
  data: {
    areas: string[];
    stories: Record<string, number>;
  };
};
const StoriesLists = ({ data }: dataType) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-4">
      {data?.areas.map((value, index) => (
        <div className="flex flex-row gap-3" key={index}>
          <Link href={`/blog/${value}`}>
            <Image
              src={hero}
              alt="Picture of the author"
              width={300}
              height={250}
              className=" bg-black rounded-lg h-14 w-24"
            />
          </Link>
          <Link className="flex flex-col gap-2" href={`/blog/${value}`}>
            <h4 className="h6-bold">{Capitalize(value)}</h4>
            <div className=" text-slate-700 h7 flex flex-row gap-1">
              <span>{data.stories[value]} stories</span>
              <span>.</span>
              <span>420 saves</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default StoriesLists;
