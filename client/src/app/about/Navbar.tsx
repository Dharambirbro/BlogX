import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="">
        <h6 className="px-4 pb-6 pt-4 max-sm:hidden h4-semibold">About Us</h6>
        <div className="flex flex-col gap-3 sm:mx-2 max-sm:flex-row max-sm:border-y-2 max-sm:p-3 ">
          <Link
            href="/about/blogX"
            className="hover:bg-blue-500 px-2 rounded-md h6-semibold"
          >
            AboutUs
          </Link>
          <Link
            href="/about/terms"
            className="hover:bg-blue-500 px-2 rounded-md h6-semibold"
          >
            Terms
          </Link>
          <Link
            href="/about/privacy"
            className="hover:bg-blue-500 px-2 rounded-md h6-semibold"
          >
            Privacy
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
