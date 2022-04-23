import axios from "axios";
import { configuration } from "../environment";

export const deleteProduct = async (id: number) => {
    return await axios.delete(`${configuration.baseUrl}/products/${id}`)
}