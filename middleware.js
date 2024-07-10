// import { NextResponse } from "next/server";

// // creating our own middleware
// export function middleware(request) {
//   console.log(request);

//   // we return a response by redirecting the user to the about page
//   return NextResponse.redirect(new URL("/about", request.url));
// }

// in here, we can specify only the paths in which the middleware should run
// export const config = {
//   matcher: ["/account", "/cabins"],
// };
import { auth } from "@/app/_lib/auth";
export const middleware = auth;

export const config = {
  matcher: ["/account"],
};

// auth serves as a middleware as well
