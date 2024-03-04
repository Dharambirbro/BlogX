import Link from "next/link";
import { StaticImageData } from "next/image";
import { Suspense } from "react";

import ImageSlider from "@/components/slider/ImageSlider";
import CardSlider from "@/components/slider/CardSlider";
import CategorySlider from "@/components/slider/CategorySlider";
import ImgTemplate from "@/components/ImgTemplate";
import CardLists from "../blog/CardLists";
import ComponentFetch from "@/components/custom/ComponentFetch";
import { fetchBlog } from "@/server/blogAction";

import hero from "@/public/hero.png";

const page = () => {
  const popularcourses: [string, string, string | StaticImageData][] = [
    ["webdevelopment", "/courses/webdevelopment", hero],
    ["webdevelopment", "/courses/webdevelopment", hero],
    ["webdevelopment", "/courses/webdevelopment", hero],
    ["webdevelopment", "/courses/webdevelopment", hero],
    ["webdevelopment", "/courses/webdevelopment", hero],
    ["webdevelopment", "/courses/webdevelopment", hero],
    ["webdevelopment", "/courses/webdevelopment", hero],
  ];

  const Templatedata = {
    title: "Your Learning guide is here",
    desc: "Learn our free courses faster and enjoy our blogs with questions and their answers",
    link: "",
    img: hero,
  };

  const CategoryData = {
    areas: ["web Development", "machineLearning", ""],
  };

  const TopLearningData = [
    {
      img: hero,
      title: "html",
      link: "./",
      date: "",
      category: "",
    },
    {
      img: hero,
      title: "html",
      link: "./",
      date: "",
      category: "",
    },
    {
      img: hero,
      title: "html",
      link: "./",
      date: "",
    },
    {
      img: hero,
      title: "html",
      link: "./",
      date: "",
    },
    {
      img: hero,
      title: "html",
      link: "./",
      date: "",
    },
  ];

  const codeString = `
        function helloWorld() {
            console.log('Hello, World!');
        }
        
        helloWorld();
    `;

  return (
    <div className="wrapper flex flex-col gap-12">
      {/* //hero section */}
      <section className="pt-8">
        <ImgTemplate data={Templatedata} />
      </section>

      {/* navigation bar  */}

      <section className="w-full flex flex-col gap-4">
        <h3>Popular Categories</h3>
        <CategorySlider data={CategoryData} link="courses" />
      </section>

      {/* //popular courses to learn */}
      <section className="w-full flex flex-col gap-6">
        <h5 className="self-center">Popular courses to learn</h5>
        <ImageSlider data={popularcourses} />
      </section>

      {/* top viewed courses */}
      <section className="">
        <h3>Top viewed courses</h3>
        <CardLists data={TopLearningData} />
        <div className=" ">
          {/* <Suspense fallback={<p>loading...</p>}>
            <ComponentFetch
              fetch={fetchCategory}
              DataComponent={CardLists}
              page={1}
              popular={false}
              limit={6}
              category="fashion"
            />
          </Suspense> */}
        </div>
      </section>
      {/* //Any question visit our blog  */}
      <section className="w-full flex flex-col gap-4">
        <h5 className="self-center">Any questions?</h5>
        <div className="flex flex-row w-full items-center justify-between">
          <p className="">
            You can visit our blog where we have answered most of the frequently
            asked questions.
          </p>
          <Link
            className="px-5 py-2 border-black border-[1px] rounded-3xl text-nowrap"
            href="/blog"
          >
            See all
          </Link>
        </div>
        <Suspense fallback={<p>loading...</p>}>
          <ComponentFetch
            fetch={fetchBlog}
            DataComponent={CardSlider}
            page={1}
            popular={false}
            limit={6}
          />
        </Suspense>
      </section>
    </div>
  );
};

export default page;
