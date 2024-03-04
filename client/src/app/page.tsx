import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import SearchNavigation from "@/components/SearchNavigation";
import ImageSlider from "@/components/slider/ImageSlider";
import CardSlider from "@/components/slider/CardSlider";
import ImgTemplate from "@/components/ImgTemplate";
import hero from "@/public/hero.png";
import { fetchBlog } from "@/server/blogAction";
import ComponentFetch from "@/components/custom/ComponentFetch";
import RecentSearches from "@/components/RecentSearches";

export default async function Home() {
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

  return (
    <>
      <div className="wrapper flex flex-col gap-12">
        {/* what to learn with search bar */}
        <section className="w-full flex flex-col pt-6 items-center">
          <h1 className=" h1-bold max-md:hidden bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
            What to learn?
          </h1>

          <SearchNavigation />
        </section>

        {/* Template for learning */}

        <ImgTemplate data={Templatedata} />

        {/* template for blog  */}
        <section className="max-[460px]:hidden">
          <div className="bg-quint-dark w-full h-56 flex flex-row gap-4 rounded text-black">
            <Image
              src={hero}
              alt="Picture of the author"
              width={400}
              height={250}
              className="border-black border-2 -rotate-3 bg-black rounded-xl h-48 w-48 my-auto mx-2"
            />
            <div className="flex flex-col gap-2 my-auto">
              <h5>Your brain is made to learn </h5>
              <p>
                get the most out of it and gain the important knowledge this
                2024
              </p>
              <div className="w-full flex items-end flex-col">
                <button className=" border-2 border-black rounded-3xl px-4 py-2 max-lg:mx-2">
                  Read now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* //popular courses to learn */}
        <section className="w-full flex flex-col gap-6">
          <h5 className="h4-bold">Popular courses to learn</h5>
          <ImageSlider data={popularcourses} />
        </section>

        {/* unlock the new world of web development  */}

        <section className="bg-quint-dark">
          <div className="container mx-auto text-center py-10">
            <h2 className="text-4xl font-bold mb-6 text-black  bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 text-transparent bg-clip-text">
              Unlock the World of Web Development with Us
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Experience a transformative journey in web development through our
              comprehensive learning platform and insightful blog.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-semibold mb-4">
                  Web Development Learning Platform
                </h3>
                <p className="text-lg mb-4">
                  Discover a hands-on learning experience designed to elevate
                  your skills. From mastering HTML and CSS to diving into
                  advanced frameworks like React, our platform is tailored for
                  learners at every stage.
                </p>
                <Link
                  href="/courses"
                  className="inline-block bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100"
                >
                  Explore Courses
                </Link>
              </div>
              <div className="bg-green-500 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-semibold mb-4">
                  Web Development Blog
                </h3>
                <p className="text-lg mb-4">
                  Immerse yourself in the world of web development with our
                  insightful blog. Our articles, crafted by industry experts and
                  enthusiasts, cover the latest trends, best practices, and
                  practical tips to keep you ahead of the curve.
                </p>
                <Link
                  href="/blog"
                  className="inline-block bg-white text-green-500 py-2 px-4 rounded-full hover:bg-green-100"
                >
                  Read Latest Posts
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Importance of Learning from Our Platform Section --> */}
        <section className="container mx-auto px-4">
          <h2 className="h4-bold mb-4">Why Learn from Our Platform?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
            {/* <!-- Section 1 --> */}
            <div className="bg-quint-dark p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p>
                Our courses are led by experienced and passionate instructors
                who are experts in the field. Learn from professionals who bring
                real-world insights and practical knowledge to your learning
                journey.
              </p>
            </div>

            {/* <!-- Section 2 --> */}
            <div className="bg-quint-dark p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">Hands-On Projects</h3>
              <p>
                We believe in learning by doing. Our platform provides hands-on
                projects and exercises to reinforce your skills. Apply what you
                learn in real-world scenarios and build a strong foundation for
                your web development career.
              </p>
            </div>

            {/* <!-- Section 3 --> */}
            <div className="bg-quint-dark p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p>
                Join our thriving community of learners. Connect with fellow
                students, ask questions, and collaborate on projects. Our
                platform fosters a supportive environment where you can grow
                your skills and network with like-minded individuals.
              </p>
            </div>
          </div>
        </section>

        {/* Your recent searches */}
        <section>
          <h2 className="h5-bold pb-4">Your recent searches</h2>
          <div className="flex gap-2 flex-wrap">
            <RecentSearches />
          </div>
        </section>

        {/* //Any question visit our blog  */}
        <section className="w-full flex flex-col gap-4">
          <h5 className="h4-bold">Any questions?</h5>
          <div className="flex flex-row w-full items-center justify-between">
            <p className="">
              You can visit our blog where we have answered most of the
              frequently asked questions.
            </p>
            <Link
              className="px-5 py-2 border-black border-[1px] rounded-3xl text-nowrap dark:bg-text-dark dark:border-border-primary"
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
    </>
  );
}
