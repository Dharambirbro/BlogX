"use client";
import Link from "next/link";
import { useState, ChangeEvent, MouseEvent } from "react";
import { useRouter } from "next/navigation";

const links = [
  {
    title: "Search All",
    color: "bg-green-500",
    desc: "ssearch all you want",
  },
  {
    title: "Web development",
    color: "bg-blue-500",
    desc: "abc",
  },
  {
    title: "Exams",
    color: "bg-red-500",
    desc: "def",
  },
  {
    title: "Blog",
    color: "bg-yellow-500",
    desc: "ghij",
  },
];

var SearchData = [
  {
    title: "Introduction to Web Development",
    names: ["Web Development 101", "Web Dev Basics"],
    link: "/courses/web-development",
  },
  {
    title: "web development",
    names: ["Css", "Web Dev", "web design"],
    link: "/courses/webDevelopment/css",
  },
  {
    title: "Introduction to Web Development",

    names: ["Mobile-Friendly Design", "Responsive UI"],
    link: "/courses/responsive-design",
  },
  {
    title: "Introduction to Web Development",

    names: ["JS Coding Standards", "Optimizing JavaScript", "css"],
    link: "/courses/javascript-best-practices",
  },
  {
    title: "Introduction to Web Development",

    names: ["React Basics", "React Introduction", "css"],
    link: "/courses/getting-started-with-react",
  },
  {
    title: "Introduction to Web Development",

    names: ["Blogging Strategies", "Writing Great Content", "html"],
    link: "/blogs/blogging-tips",
  },
];
type SearchResult = {
  name: string;
  link: string;
  score: number;
}[];

const SearchNavigation = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("Search All");
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState<SearchResult>([]);

  const search = (value: string) => {
    // Use an array to store matching results
    const results: SearchResult = [];

    SearchData.forEach((item) => {
      // Calculate a score for each item based on how well it matches the search term
      let score = 0;

      // Check main title
      if (item.title.toLowerCase().includes(value.toLowerCase())) {
        score += 2; // Increase the score for matching the main title
      }

      // Check alternative names
      item.names.forEach((name) => {
        if (name.toLowerCase().includes(value.toLowerCase())) {
          score += 1; // Increase the score for matching an alternative name
        }
        if (score > 0) {
          results.push({ name, link: item.link, score });
        }
      });

      // If there is a match, add the item to the results array with the score
      if (score > 0) {
        results.push({ name: item.title, link: item.link, score });
      }
    });

    // Sort results based on score in descending order
    results.sort((a, b) => b.score - a.score);

    // Return the top 10 results
    return results.slice(0, 10);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);

    setResults((prev) => {
      const inputValue = e.target.value.trim(); // Remove leading and trailing whitespaces

      // Check if the input value is not empty
      if (inputValue) {
        return search(inputValue);
      } else {
        return [];
      }
    });
  };
  const handleSubmit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    if (results.length) {
      router.push(results[0].link);
    }
    console.log(searchInput, (e.target as HTMLButtonElement).id);
  };

  return (
    <>
      {/* navigation for search bar  */}
      <div className=" py-6 text-slate-800 box-content w-full dark:text-white flex items-center justify-center">
        <div className="w-[630px] overflow-x-auto scrollbar max-md:w-full">
          <div className="flex flex-row gap-4  mx-auto pb-2 w-min">
            {links.map((value, index) => (
              <button
                key={index}
                className={`${
                  activeCategory == value.title
                    ? "dark:border-b-sec-text-dark border-b-4 dark:text-sec-text-dark border-b-black text-black"
                    : ""
                }`}
                onClick={() => handleCategoryClick(value.title)}
              >
                <h5 className="w-max h5-semibold">{value.title}</h5>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Search bar */}

      <div className="w-[768px] max-md:w-full">
        {links.map((value, index) => {
          if (value.title == activeCategory) {
            return (
              <form
                className="md:relative max-md:border-2 rounded-xl px-4 relative"
                key={index}
              >
                <input
                  type="text"
                  className="w-full focus:outline-0 py-[12px] caret-black text-black h-16 md:rounded-3xl md:border-2 md:border-black md:pl-10 md:pr-16 max-md:border-b-2 peer border border-border-primary dark:bg-quint-dark"
                  placeholder={value.desc}
                  value={searchInput}
                  onChange={handleChange}
                  name={value.title}
                  autoComplete="off"
                />
                <div className="w-full max-md:flex max-md:justify-center max-md:py-4">
                  <button
                    type="submit"
                    className={`py-[14px] px-6 rounded-[20px] md:absolute md:right-6 md:top-1/2 md:transform md:-translate-y-1/2 max-md:w-full max-md:py-2 ${
                      value.color
                    } hover:${value.color.replace("-500", "-300")}`}
                    onClick={handleSubmit}
                    id={value.title}
                  >
                    Search
                  </button>
                </div>
                {/* drop down menu here  */}
                <div className="invisible w-full h-80 absolute top-full z-10 overflow-y-auto scrollbar left-0 peer-focus:visible hover:visible">
                  <div className="pb-10 pt-4 flex flex-col bg-white border-2 rounded-xl dark:bg-quart-dark border-border-primary">
                    {results?.map((item, index) => (
                      <Link
                        href={item.link}
                        className="px-8 border-b border-black hover:bg-blue-500 py-1"
                        key={index}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </form>
            );
          }
        })}
      </div>
    </>
  );
};

export default SearchNavigation;
