import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

type dataProps = [string, string, string | StaticImageData];

type PopularCoursesListProps = {
  data: dataProps[];
};
function ImageSlider({ data }: PopularCoursesListProps): JSX.Element {
  return (
    <div className="scrollbar flex flex-row gap-4 overflow-x-auto py-1">
      {data?.map((items: dataProps, index: number) => (
        <Link
          className="relative hover:shadow-[0_0_10px_purple]"
          key={index}
          href={items[1]}
        >
          <Image
            src={items[2]}
            alt="Picture of the author"
            width={300}
            height={300}
            className="border-black border-2 bg-black min-h-48 min-w-48 rounded-lg"
          />
          <p className="text-white font-bold text-xl absolute bottom-[5px] left-[5px] w-min">
            {items[0]}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default ImageSlider;
