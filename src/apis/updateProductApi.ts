import { UpdateProduct } from "../types/productsType";
import axios from "axios";
import { configuration } from "../environment";

export const updateProduct = async (product: UpdateProduct) => {
    return await axios.put(`${configuration.baseUrl}/products/${product.id}`, product)
}