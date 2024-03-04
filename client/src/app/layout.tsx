import type { Metadata } from "next";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./globals.css";

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
    <html lang="en" className="">
      <body className="scroll-smooth text-black dark:bg-primary-dark dark:text-primary-text-dark">
        <header className="w-full fixed bg-white z-10 animation pt-1 dark:bg-secondary-dark dark:text-sec-text-dark">
          <Navbar />
        </header>
        <div className="p-8"></div>
        <main className="w-full">{children}</main>
        <footer className="w-full bg-quint-dark mt-10 text-black">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
