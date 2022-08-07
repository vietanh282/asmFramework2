import instance from "./instance";


export const listCate:any = () => {
    const url = `/categories`;
    return instance.get(url);
}

export const addCate:any = (cate:any) => {
    const url = `/categories`;
    return instance.post(url, cate);
}   

export const editCate:any = (cate:any) => {
    const url = `/categories/${cate.id}`;
    return instance.put(url, cate);
}   

export const removeCate:any = (id:any) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
}   
export const getCatebyId:any = (id:any) => {
    const url = `/categories/${id}`;
    return instance.get(url);
}   


export const listCateDetailById:any = (id:number) => {
    const url = `/detailCate?categories=${id}`;
    return instance.get(url);
}
export const listAllDetail:any = () => {
    const url = `/detailCate`;
    return instance.get(url);
}