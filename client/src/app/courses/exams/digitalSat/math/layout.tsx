import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Courses",
  description: "Blogging",
};
import Sidebar from "../../Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="flex flex-row">
        <Sidebar />
        {children}
      </section>
    </>
  );
}
