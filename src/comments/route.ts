import { type NextResponse } from "next/server";
import { comments } from "./data";

// export async function GET(){
//     return Response.json(comments)
// }

export async function POST(request: Request){
    const comment = await request.json();

    const newComments = {
        id: comment.length + 1 ,
        text: comment
    };
    comments.push(newComments);

    return new Response(JSON.stringify(newComments) , {
        headers: {'Content-Type': "application/json"},
        status: 201
    })
}

// export async function GET(request: NextResponse) {
//     const searchParams = request.nextUrl.searchParams;
//     const query = searchParams.get('query');
// }