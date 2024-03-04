export const fetchCourse = async (
  page: number,
  limit: number,
  popular: boolean
) => {
  try {
    const response = await fetch(
      `${process.env.SERVER}/api/courses/blog?page=${page}&limit=${limit}&popular=${popular}`,
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
