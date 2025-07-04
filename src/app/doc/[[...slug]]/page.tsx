export default async function Slug({params, }: {params : Promise <{slug: string[]}>}){

    const {slug} = await params;
    console.log(slug)
    return (
        <div>Catching all the routes</div>
    )
}