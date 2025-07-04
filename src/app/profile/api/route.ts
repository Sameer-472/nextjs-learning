import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    console.log("requestHeaders", requestHeaders.get("authorization"));
    const headerList = await headers();
    console.log("Header List:", headerList.get("authorization"));

    const theme = request.cookies.get("theme")?.value || "light";
    const cookieStore = await cookies();
    cookieStore.set("resultPerpage", "20");
    return new Response('<h1>Profile API</h1>', {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme = dark"
        }
    });
}