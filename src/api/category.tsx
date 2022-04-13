import { CategoriesType } from "../pages/types/category";
import instance from "./instance";


export const listCate = () => {
    const url = `/categories`;
    return instance.get(url);
}
export const removeCate = (id: number) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
}
export const addCate = (category: CategoriesType) => {
    const url = `/categories`;
    return instance.post(url, category);
}
export const read = (id: number) => {
    const url = `/categories/${id}`;
    return instance.get(url);
}
export const update = (category: CategoriesType) => {
    const url = `/categories/${category.id}`;
    return instance.put(url, category);
}