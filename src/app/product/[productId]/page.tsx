export default async function ProductId({params,}: {params: Promise<{productId: String}>} ) {
    const productId = (await params).productId;

    return (
        <div>Product id is here {productId}</div>
    )
}