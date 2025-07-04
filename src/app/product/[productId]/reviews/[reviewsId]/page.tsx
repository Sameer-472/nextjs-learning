export default async function ReviewsId ({params,} : {params: Promise <{productId: string , reviewsId: string}>}) {

    const {productId , reviewsId} = await params
    return(
        <div>Review {reviewsId} Product Id {productId}</div>
    )
}