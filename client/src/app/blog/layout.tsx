import type { Metadata } from "next";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blogging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
