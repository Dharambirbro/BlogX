import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description: "Blogging",
};
import Link from "next/link";

const courseData = [
  {
    topic: "HTML Tutorial",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    topic: "HTML Tutorial",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
  {
    title: "HTML Home",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="flex flex-row">
        <aside className="text-nowrap w-60 h-[85vh] border border-black bg-quint-dark overflow-y-auto scrollbar dark:bg-text-dark">
          <nav className="py-3 flex flex-col">
            {courseData?.map((item, index) => {
              if (item.topic) {
                return (
                  <h3 className="h5-semibold p-2" key={index}>
                    {item.topic}
                  </h3>
                );
              } else if (item.title) {
                return (
                  <Link
                    href="/"
                    className=" hover:bg-green-500 h5 py-1 px-2 dark:hover:bg-quart-dark "
                    key={index}
                  >
                    {item.title}
                  </Link>
                );
                return;
              }
            })}
          </nav>
        </aside>
        {children}
      </section>
    </>
  );
}
