import type { Metadata } from "next";
import Sidebar from "../Sidebar";
export const metadata: Metadata = {
  title: "Courses",
  description: "Blogging",
};
import Image from "next/image";
import hero from "@/public/hero.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="flex flex-row">
        <Sidebar />
        {/* <div className="absolute w-16 h-16">
            <Image
              src={hero}
              alt="Picture of the author"
              width={60}
              height={60}
              className=" h-5 w-5 bg-black absolute "
            />
          </div> */}

        <div className="min-w-60"></div>
        {children}
      </section>
    </>
  );
}
