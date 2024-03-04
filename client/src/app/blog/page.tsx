import Image from "next/image";

import { Suspense } from "react";
import hero from "@/public/hero.png";

import CategorySlider from "@/components/slider/CategorySlider";
import VerticalCards from "@/components/slider/VerticalCards";
import KeepExploring from "@/components/slider/KeepExploring";
import ContentLists from "@/components/list/ContentLists";
import ComponentFetch from "@/components/custom/ComponentFetch";
import {
  fetchBlog,
  fetchRecentBlog,
  fetchBlogCategories,
} from "@/server/blogAction";
import { blogImg } from "@/lib/data";

const page = () => {
  return (
    <div className="wrapper">
      {/* welcome */}
      <div className="py-8">
        <p className="py-2 h1">
          <span className="h1-bold">Hey,Visitors!</span>
          Discover my stories and creative ideas.
        </p>
      </div>
      {/* hero section  */}

      <div className="grid grid-cols-2 py-12 gap-8 items-center max-md:grid-cols-1">
        <div className="w-full flex h-full justify-center">
          <Image
            src={hero}
            alt="Picture of the author"
            width={500}
            height={500}
            className="border-2 border-black h-full"
          />
        </div>
        <div className="flex w-full flex-col gap-4 items-start py-8 max-md:py-1">
          <h5 className="max-md:text-center">
            Simple way to inspire your Inner Innovator
          </h5>
          <p>
            Whether you are an aspiring artist,a curious thinker,or simply
            looking to add a touch of creativity to your routine,our journey
            together will remind you that creativity knows no bounds.Get ready
            to unlock a world of innovation and self expressopn!
          </p>
          <button className="">
            <span className="bg-slate-200 p-2 rounded w-max dark:bg-text-dark">
              Read More
            </span>
          </button>
        </div>
      </div>
      {/* popular categories  */}
      <div className="py-4 w-full flex flex-col">
        <h3>Popular Categories</h3>
        <Suspense fallback={<p>loading...</p>}>
          <ComponentFetch
            fetch={fetchBlogCategories}
            DataComponent={CategorySlider}
            page={1}
            popular={false}
            limit={6}
            link="blog"
            img={blogImg}
          />
        </Suspense>
      </div>
      {/* recent posts  */}
      <div>
        <h3>Recent Posts</h3>
        <div className="flex flex-row gap-6 max-lg:flex-col">
          {/* recent posts  */}
          <div className="flex flex-col gap-4 py-8 basis-3/4 max-[460px]:gap-8">
            <Suspense fallback={<p>loading...</p>}>
              <ComponentFetch
                fetch={fetchRecentBlog}
                DataComponent={VerticalCards}
                page={1}
                popular={false}
                limit={4}
              />
            </Suspense>

            <button className="py-5">
              <span className="border border-black rounded-2xl px-4 py-2 dark:bg-text-dark dark:border-border-primary">
                Load more
              </span>
            </button>
          </div>

          {/* whats hot  */}
          <div className="basis-1/4 pb-10">
            <p>What's hot</p>
            <h5 className="pb-6">Most Popular</h5>
            <Suspense fallback={<p>loading...</p>}>
              <ComponentFetch
                fetch={fetchBlog}
                DataComponent={ContentLists}
                page={1}
                popular={true}
                limit={6}
              />
            </Suspense>
          </div>
        </div>
      </div>

      {/* //keep exploring */}
      <div className="flex items-center flex-col">
        <h5>Keep exploring</h5>

        <section className="grid grid-cols-3 py-8 gap-3 max-md:grid-cols-1">
          <Suspense fallback={<p>loading...</p>}>
            <ComponentFetch
              fetch={fetchBlog}
              DataComponent={KeepExploring}
              page={1}
              limit={12}
              popular={false}
            />
          </Suspense>
        </section>
      </div>
    </div>
  );
};

export default page;
