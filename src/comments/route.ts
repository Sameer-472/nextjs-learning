import { comments } from "./data";

export async function GET(){
    return Response.json(comments)
}

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