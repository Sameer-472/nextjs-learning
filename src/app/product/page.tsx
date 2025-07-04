import {Metadata} from "next";

type Props = {
    params: Promise<{product: string}>;
}

export const generateMetadata = async ({params}: Props): Promise<Metadata>=>{
    const id = (await params).product;
    return {
        title: `Product ${id}`
    }
}

export default function Product({params}: Props){
    return (
        <>
            Product is here
        </>
    )
}