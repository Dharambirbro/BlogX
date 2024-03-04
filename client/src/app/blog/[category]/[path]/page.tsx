import Image from "next/image";
import { Suspense } from "react";
import Link from "next/link";
import hero from "@/public/hero.png";
import { twitter, facebook, linkedin } from "@/public/index";
import ComponentFetch from "@/components/custom/ComponentFetch";
import BlogEngine from "../../BlogEngine";
import CardSlider2 from "@/components/slider/CardSlider2";
import StoriesLists from "@/components/list/StoriesLists";
import { DateConvert } from "@/lib/utils";
import {
  fetchBlogCategories,
  fetchSpecificBlog,
  fetchCategory,
} from "@/server/blogAction";

const links = [
  {
    name: "Organize the content",
  },

  {
    name: "Organize the content",
  },
  {
    name: "Organize the content",
  },
  {
    name: "Organize the content",
  },
  {
    name: "Organize the content",
  },
  {
    name: "Organize the content",
  },
  {
    name: "Organize the content",
  },
  {
    name: "Organize the content",
  },
  {
    name: "Organize the content",
  },
  {
    name: "Organize the content",
  },
  {
    name: "Organize the content",
  },
];

type datatype = {
  params: {
    category: string;
    path: string;
  };
};

const page = async ({ params }: datatype) => {
  const data = await fetchSpecificBlog(1, 6, false, params.path);
  return (
    <div className="container mx-auto flex flex-col gap-10 pt-6 px-5">
      <header className="text-center flex flex-col gap-2">
        <div>
          <button className="rounded-3xl bg-slate-300 px-2 py-1 h7 dark:bg-text-dark">
            Features
          </button>
        </div>
        <h2 className="h3-semibold text-balance text-center">
          {data.title ? data.title : ""}
        </h2>
        <span>{data ? DateConvert(data.date) : ""}</span>
      </header>

      <section className="">
        <Image
          src={hero}
          alt="Picture of the author"
          width={300}
          height={250}
          className="border-black border-2 bg-black rounded-lg w-full"
        />
      </section>
      <main className="flex flex-row gap-10 px-12">
        <div className="flex flex-col gap-5 h7 text-nowrap">
          {data?.content.map((value: any, index: number) => {
            console.log(value);
            if (value.key == "section") {
              if (value.data.h3) {
                return (
                  <Link
                    href={`#${value.data.h3}`}
                    key={index}
                    className="hover:font-bold"
                  >
                    {value.data.h3}
                  </Link>
                );
              }
            }
          })}
        </div>

        {/* articles of the blog  */}
        <Suspense fallback={<p>loading...</p>}>
          <ComponentFetch
            fetch={fetchSpecificBlog}
            DataComponent={BlogEngine}
            page={1}
            popular={false}
            limit={6}
            path={params.path}
          />
        </Suspense>
      </main>
      {/* Recommended articles  */}
      <section className="flex flex-col gap-6">
        <h3 className="h4-semibold">Recommended Articles</h3>

        <Suspense fallback={<p>loading...</p>}>
          <ComponentFetch
            fetch={fetchCategory}
            DataComponent={CardSlider2}
            page={1}
            popular={false}
            limit={6}
            category={params.category}
          />
        </Suspense>
        <div className="border-y border-black py-6 flex flex-col gap-4">
          <h4 className="h5">Lists</h4>

          <Suspense fallback={<p>loading...</p>}>
            <ComponentFetch
              fetch={fetchBlogCategories}
              DataComponent={StoriesLists}
              page={1}
              popular={false}
              limit={6}
            />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default page;
