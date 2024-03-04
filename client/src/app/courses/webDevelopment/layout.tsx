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
        <header className="border-y-[1px] border-y-black fixed bg-white w-full">
          <Navbar />
        </header>
        <div className="p-6"></div>
        {children}
      </div>
    </>
  );
}
