import Link from "next/link";
import { colors } from "@/lib/data";

type dataProps = {
  data: {
    title: string;
    img: string;
    category: string;
    writer: string;
    link: string;
    date: string;
  }[];
};
const ContentLists = ({ data }: dataProps) => {
  return (
    <div className="gap-6 flex flex-col">
      {data?.map((items, index) => (
        <div key={index}>
          <span className={`rounded-xl px-1 ${colors[index % colors.length]}`}>
            {items.category}
          </span>
          <Link href={`/blog/${items.category}${items.link}`}>
            <p>{items.title}</p>
          </Link>
          <p className="text-sm">
            <span className="font-bold pr-2 text-base">{items.writer}</span>
            {items.date.slice(0, 10)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContentLists;
