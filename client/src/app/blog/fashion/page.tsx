import { Suspense } from "react";
import BlogHero from "@/components/hero/BlogHero";
import CardSlider from "@/components/slider/CardSlider";
import CardLists from "../CardLists";
import hero from "@/public/hero.png";
import { fetchBlog, fetchCategory } from "@/server/blogAction";
import BlogHeaderCard from "../BlogHeaderCard";
import ComponentFetch from "@/components/custom/ComponentFetch";

const FashionHero = {
  name: "Fashion",
  link: "blog > fashion",
  title:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, sunt.",
  img: hero,
};

const page = () => {
  return (
    <div className="space-y-20">
      {/* hero section */}
      <BlogHero data={FashionHero} />

      {/* body part  */}
      <div className="wrapper flex flex-col gap-12">
        {/* popular article  */}
        <div className="flex flex-col gap-6">
          <h1 className="h2-semibold text-nowrap py-5">Popular Articles</h1>

          {/* popular data from the category  */}
          <Suspense fallback={<p>loading...</p>}>
            <ComponentFetch
              fetch={fetchCategory}
              DataComponent={BlogHeaderCard}
              page={1}
              popular={true}
              limit={6}
              category="fashion"
            />
          </Suspense>
        </div>
        {/* all data from same category  */}
        {/* lasted what  we so  */}
        <div className="">
          <h1 className="h2-semibold py-10">Lasted What We Do</h1>

          <Suspense fallback={<p>loading...</p>}>
            <ComponentFetch
              fetch={fetchCategory}
              DataComponent={CardLists}
              page={1}
              popular={false}
              limit={6}
              category="fashion"
            />
          </Suspense>
        </div>
        {/* keep exploring  */}

        <div className="flex flex-col gap-4 max-w-full">
          <h3 className="h2-semibold">Keep Exploring</h3>
          <Suspense fallback={<p>loading...</p>}>
            <ComponentFetch
              fetch={fetchBlog}
              DataComponent={CardSlider}
              page={1}
              popular={false}
              limit={6}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default page;
