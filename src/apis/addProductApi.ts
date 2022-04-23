import { AddProduct } from "../types/productsType";
import axios from "axios";
import { configuration } from "../environment";

export const addProduct = async (product: AddProduct) => {
    return await axios.post(`${configuration.baseUrl}/products`, product)
}