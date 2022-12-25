import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    const productsData = await fetch('https://ema-john-simple-server-eight.vercel.app/products');
    const { products } = await productsData.json();
    const savedCart = getStoredCart();
    // console.log(products)
    const initialCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product._id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }

    }
    return { products, initialCart };
}