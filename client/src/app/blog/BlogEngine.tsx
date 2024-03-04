type dataType = {
  data: {
    title: string;
    img: string;
    date: string;
    content: {
      key: string;
      data: any;
    }[];
  };
};

const data1 = [
  {
    key: "p-head",
    data: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, fugiat consequatur expedita animi alias reiciendis eveniet, cupiditate, doloribus voluptatibus necessitatibus laudantium optio. Reiciendis tenetur aliquam ratione velit eveniet error voluptas mollitia amet ipsum porro, pariatur eum odio, nostrum est enim id reprehenderit illo. Hic delectus voluptatum voluptatem molestiae voluptate dolores error itaque non, eos molestias odit cum necessitatibus aspernatur. Vel laudantium ipsam quidem maiores nisi repellendus velit accusamus voluptate dolores!",
  },
  {
    key: "section",
    data: {
      h3: "Organize your contact",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae natus similique inventore non! Quas voluptas, soluta eaque esse perspiciatis distinctio eum fuga deleniti minus exercitationem similique, veniam corporis! Reprehenderit voluptatum vero sed enim nulla hic, maxime deserunt repudiandae nemo?",
    },
  },
  {
    key: "section",
    data: {
      h3: "Organize your contact",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae natus similique inventore non! Quas voluptas, soluta eaque esse perspiciatis distinctio eum fuga deleniti minus exercitationem similique, veniam corporis! Reprehenderit voluptatum vero sed enim nulla hic, maxime deserunt repudiandae nemo?",
    },
  },
  {
    key: "section",
    data: {
      h3: "Organize your contact",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae natus similique inventore non! Quas voluptas, soluta eaque esse perspiciatis distinctio eum fuga deleniti minus exercitationem similique, veniam corporis! Reprehenderit voluptatum vero sed enim nulla hic, maxime deserunt repudiandae nemo?",
      ul: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
    },
  },
  {
    key: "section",
    data: {
      h3: "Organize your contact",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae natus similique inventore non! Quas voluptas, soluta eaque esse perspiciatis distinctio eum fuga deleniti minus exercitationem similique, veniam corporis! Reprehenderit voluptatum vero sed enim nulla hic, maxime deserunt repudiandae nemo?",
      lists: {
        li1: "Lorem ipsum dolor sit amet",
        p1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi deserunt repudiandae, voluptatum dolorum repellat nulla alias facere iste ut sit?",
        ul1: [
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
        ],
        li2: "Lorem ipsum dolor sit amet",
        ul2: [
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
        ],
      },
    },
  },
];

const BlogEngine = ({ data }: dataType) => {
  return (
    <>
      <article className=" space-y-8">
        {data?.content.map((item, index1) => {
          if (item.key == "p-head") {
            return (
              <div className="" key={index1}>
                {item.data}
              </div>
            );
          } else if (item.key == "section") {
            return (
              <div className=" space-y-3" key={index1}>
                {item.data.h3 && (
                  <h3 key={index1 + "h3"} id={item.data.h3}>
                    {item.data.h3}
                  </h3>
                )}
                {item.data.p && (
                  <p className="" key={index1 + "p"}>
                    {item.data.p}
                  </p>
                )}
                {item.data.ul && (
                  <ul key={index1 + "ul"} className="list-disc list-inside">
                    {item.data.ul.map((list: string, index2: any) => {
                      return <li key={index2 + "c"}>{list}</li>;
                    })}
                  </ul>
                )}
                {item.data.lists && (
                  <ul className="list-disc list-inside" key={index1 + "ul"}>
                    {Object.keys(item.data.lists).map(
                      (key: string, index2: number) => {
                        // since the key contains number so removing number to get actual keys like ul li
                        let newKey = key.replace(/\d+/g, "");
                        if (newKey == "li") {
                          return <li key={index2}>{item.data.lists[key]}</li>;
                        } else if (newKey == "p") {
                          return <p key={index2}>{item.data.lists[key]}</p>;
                        } else if (newKey == "ul") {
                          return (
                            <ol
                              key={index1 + "ol"}
                              className="list-decimal list-inside"
                            >
                              {item.data.lists[key].map(
                                (list: string, index2: any) => {
                                  return <li key={index2 + "c"}>{list}</li>;
                                }
                              )}
                            </ol>
                          );
                        }
                        return (
                          <p key={index1 + "P"} className=" text-yellow-500">
                            None
                          </p>
                        );
                      }
                    )}
                  </ul>
                )}
              </div>
            );
          }
          return (
            <p key={index1} className=" text-red-500">
              None
            </p>
          );
        })}
      </article>
    </>
  );
};

export default BlogEngine;
