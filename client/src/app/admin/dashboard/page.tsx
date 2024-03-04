import Button from "./Button";
import Checkbox from "./Checkbox";
import CustomInput from "./CustomInput";
import Notification from "@/components/custom/Notification";

const add_title_data = [
  {
    value: "python",
  },
  {
    value: "web",
  },
  {
    value: "copy",
  },
];
const add_category_data = [
  {
    value: "python",
  },
  {
    value: "html",
  },
  {
    value: "css",
  },
];

const page = async () => {
  const handleUpload = async (formData: FormData) => {
    "use server";
    const url = "http://localhost:8080/api/blogs/blog";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      // Check if the request was successful
      if (response.ok) {
        const responseData = await response.json();
        console.log("Image uploaded successfully:", responseData.url);
        // Do something with the uploaded image URL
      } else {
        // Handle error response
        console.error("Failed to upload image:", response.statusText);
      }
    } catch (error) {
      // Handle any errors that occur during the process
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async (formData: FormData) => {
    "use server";
    const rawFormData = new FormData();

    const imgData = formData.get("image") as File;
    const imgblob = new Blob([imgData], { type: imgData.type });
    const data = {
      writer: formData.get("writer"),
      title: formData.get("title"),
      titles: formData.getAll("Add_titles"),
      category: formData.get("specific_category"),
      areas: formData.getAll("Add_category"),
      desc: formData.get("summary"),
      popular: formData.get("popular") == "1" ? true : false,
    };
    rawFormData.append("data", JSON.stringify(data));
    rawFormData.append("img", imgblob);

    if (!imgData || !rawFormData) {
      console.error("No file selected");
      return;
    }
    await handleUpload(rawFormData);
  };

  return (
    <div className="py-12 px-24">
      <form className="flex flex-col gap-4" action={handleSubmit}>
        <div className="flex flex-col gap-2 items-start border-b-2 py-2">
          <span>Enter your name</span>
          <input
            type="text"
            className="border border-black p-2"
            name="Writer"
          />
        </div>
        <div className="flex flex-col gap-2 items-start border-b-2 py-2">
          <span>Title</span>
          <input type="text" className="border border-black p-2" name="title" />
        </div>
        <div className="flex flex-col gap-2 items-start border-b-2 py-2">
          <span>Addiditonal Titles</span>
          <div className="flex flex-row gap-3 flex-wrap">
            <CustomInput />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start border-b-2 py-2">
          <span>Upload image</span>
          <input type="file" className="border border-black" name="image" />
        </div>
        <div className="flex flex-col gap-2 items-start border-b-2 py-2">
          <span>Choose specific category</span>
          <select
            name="specific_category"
            id=""
            className="border border-black"
          >
            <option value={undefined}></option>
            {add_category_data.map((item, index) => (
              <option value="Apple" key={index}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 items-start border-b-2 py-2">
          <span>Choose additional category</span>
          <div className="flex flex-row gap-3 flex-wrap">
            <Checkbox data={add_title_data} name="Add_category" />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start border-b-2 py-2">
          <span>Is it popular</span>
          <select name="popular" id="" className="border border-black">
            <option value={undefined}></option>

            <option value={1}>True</option>
            <option value={0}>False</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <span>write summary</span>
          <textarea
            name="summary"
            id=""
            cols={30}
            rows={10}
            className="border border-black p-2"
          ></textarea>
        </div>
        <Button />
        <Notification show={true} text="Notification here" />
      </form>
    </div>
  );
};

export default page;
