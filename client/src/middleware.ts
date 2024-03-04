import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fetchBlogCategories } from "./server/blogAction";

export async function middleware(request: NextRequest) {
  const data = await fetchBlogCategories();
  const { pathname } = request.nextUrl;

  //   stopping from going to admin page
  if (pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  //   stopping from going to the path we dont have
  if (pathname.startsWith("/blog/")) {
    let value = pathname.split("/")[2];
    const arr = data.areas;

    if (!arr.includes(value)) {
      return NextResponse.redirect(new URL("/blog", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/blog/:path*"],
};
