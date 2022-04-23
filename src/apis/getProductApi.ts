import axios from "axios";
import { configuration } from "../environment";

export const getProduct = async () => {
    return await axios.get(`${configuration.baseUrl}/products`);
}

export const getSingleProduct = async (id: number) => {
    return await axios.get(`${configuration.baseUrl}/products/${id}`)
}