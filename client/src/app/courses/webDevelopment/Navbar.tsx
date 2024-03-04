import Link from "next/link";
const Courses = [
  {
    name: "Home",
    link: "./",
  },
  {
    name: "Css",
    link: "./",
  },
  {
    name: "JavaScript",
    link: "./",
  },
  {
    name: "html",
    link: "./",
  },
  {
    name: "html",
    link: "./",
  },
  {
    name: "html",
    link: "./",
  },
  {
    name: "html",
    link: "./",
  },
  {
    name: "html",
    link: "./",
  },
  {
    name: "html",
    link: "./",
  },
  {
    name: "Home",
    link: "./",
  },
];

const Navbar = () => {
  return (
    <div className="wrapper flex flex-row gap-4 overflow-x-auto dark:bg-quart-dark">
      {Courses.map((item, index) => (
        <Link
          className="hover:bg-slate-200 p-2 rounded text-lg"
          key={index}
          href={item.link}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
