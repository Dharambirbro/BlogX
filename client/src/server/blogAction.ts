"use server";
// import { revalidateTag } from "next/cache";
const link = process.env.SERVER;

// export default async function action() {
//   revalidateTag("collection");
// }

//done
export const fetchBlog = async (
  page: number,
  limit: number,
  popular: boolean
) => {
  try {
    const response = await fetch(
      `${process.env.SERVER}/api/blogs/blog?page=${page}&limit=${limit}&popular=${popular}`,
      { cache: "no-store" }
    );

    const data = await response.json();
    if (data.status == 404) {
      throw new Error("Not Found");
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return data;
  } catch (err) {
    console.log(err);
  }
  //   console.log(data);
};

//done
export const fetchRecentBlog = async (
  page: number,
  limit: number,
  popular: boolean
) => {
  try {
    const response = await fetch(
      `${process.env.SERVER}/api/blogs/recent?page=${page}&limit=${limit}&popular=${popular}`,
      { cache: "no-store" }
    );
    const data = await response.json();
    if (data.status == 404) {
      throw new Error("Not Found");
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return data;
  } catch (err) {
    console.error(err);
  }

  //   console.log(data);
};
export const fetchBlogCategories = async () => {
  try {
    const response = await fetch(
      `${process.env.SERVER}/api/blogs/data`,
      // {next: { revalidate: 3600 },}
      { cache: "no-store" }
    );
    const data = await response.json();
    if (data.status == 404) {
      throw new Error("Not Found");
    }
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    return data;
  } catch (err) {
    console.error(err);
  }

  //   console.log(data);
};
export const fetchCategory = async (
  page: number,
  limit: number,
  popular: boolean,
  category: string
) => {
  try {
    const response = await fetch(
      `${process.env.SERVER}/api/blogs/categories/${category}?popular=${popular}&limit=${limit}&page=${page}`,
      { cache: "no-store" }
    );
    const data = await response.json();
    if (data.status == 404) {
      throw new Error("Not Found");
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return data;
  } catch (err) {
    console.error(err);
  }

  //   console.log(data);
};

export const fetchSpecificBlog = async (
  page: number,
  limit: number,
  popular: boolean,
  path: string
) => {
  const decodedLink = decodeURIComponent(path);

  try {
    const response = await fetch(
      `${process.env.SERVER}/api/blogs/specific/${decodedLink}`,
      { cache: "no-store" }
    );

    const data = await response.json();

    if (data.status == 404) {
      throw new Error("Not Found");
    }

    // await new Promise((resolve) => setTimeout(resolve, 5000));

    return data;
  } catch (err) {
    console.error(err);
  }
};
