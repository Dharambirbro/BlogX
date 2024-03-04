import type { Metadata } from "next";
import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: "Courses",
  description: "Blogging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col w-full static">
        <header className="border-y-[1px] border-y-black bg-white w-full dark:bg-quart-dark">
          <Navbar />
        </header>
        {children}
      </div>
    </>
  );
}
