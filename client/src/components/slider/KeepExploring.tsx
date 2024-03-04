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
  }[];
};

const KeepExploring = ({ data }: dataProps) => {
  return (
    <>
      {[0, 4, 8].map((value1, index1) => {
        let a = true;
        if (index1 == 1) {
          a = false;
        }
        return (
          <div className="flex flex-col gap-5" key={index1 + 5}>
            {[1, 2, 3, 4].map((value2, index2) => {
              if (a) {
                a = !a;
                return (
                  <>
                    <div
                      className="flex flex-col max-md:flex-row max-md:gap-3 max-[460px]:flex-col"
                      key={index2 + 10}
                    >
                      <Link
                        href={`/blog/${data[index2 + value1].category}${
                          data[index2 + value1].link
                        }`}
                      >
                        <Image
                          src={data[index2 + value1].img}
                          alt="Picture of the author"
                          width={220}
                          height={220}
                          className="border-black border-2 brightness-50 bg-black min-h-52 min-w-24 w-full md:h-64 rounded max-md:rounded-lg object-contain max-h-72 dark:bg-text-dark dark:border-border-primary"
                        />
                      </Link>
                      <p className="line-clamp-3 text-justify pt-2 max-[460px]:pt-10 break-all">
                        {data[index2 + value1].desc}
                      </p>
                    </div>
                  </>
                );
              } else {
                a = !a;
                return (
                  <>
                    <div className="relative" key={index2 + 10}>
                      <Image
                        src={data[index2 + value1].img}
                        alt="Picture of the author"
                        width={220}
                        height={300}
                        className="border-black border-2 brightness-50 bg-black min-h-72 min-w-24 w-full md:max-h-[410px] rounded max-md:rounded-lg object-contain max-h-72 dark:bg-text-dark dark:border-border-primary"
                      />
                      <div className="absolute bottom-0 w-full">
                        <Link
                          href={`/blog/${data[index2 + value1].category}${
                            data[index2 + value1].link
                          }`}
                        >
                          <p className="text-yellow-400 font-bold text-3xl p-4">
                            {data[index2 + value1].title}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        );
      })}
    </>
  );
};

export default KeepExploring;
