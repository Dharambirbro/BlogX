import { StaticImageData } from "next/image";

type testProp = {
  fetch: any;
  DataComponent: any;
  page: Number;
  limit: number;
  popular: boolean;
  category?: string;
  path?: string;
  link?: string;
  img?: string | StaticImageData[];
};
// order matters here
const ComponentFetch = async ({
  fetch,
  DataComponent,
  page,
  limit,
  popular,
  category,
  path,
  link,
  img,
}: testProp) => {
  if (category) {
    return (
      <DataComponent
        data={await fetch(page, limit, popular, category)}
        link={link}
        img={img}
      />
    );
  } else if (path) {
    return (
      <DataComponent
        data={await fetch(page, limit, popular, path)}
        link={link}
        img={img}
      />
    );
  } else {
    return (
      <DataComponent
        data={await fetch(page, limit, popular)}
        link={link}
        img={img}
      />
    );
  }
};

export default ComponentFetch;
