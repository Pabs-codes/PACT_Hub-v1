import { apiProductsType } from "../../../../context/cart/cart-types";

export default function handler(req:Request, res:Response) {
    const products: apiProductsType[] = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            image1: "https://via.placeholder.com/150",
            image2: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Product 2",
            price: 200,
            image1: "https://via.placeholder.com/150",
            image2: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Product 3",
            price: 300,
            image1: "https://via.placeholder.com/150",
            image2: "https://via.placeholder.com/150",
        },
    ];
    res.json(products);
}