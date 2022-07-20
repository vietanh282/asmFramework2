import instance from "./instance";


export const listCate:any = () => {
    const url = `/categories`;
    return instance.get(url);
}

export const add:any = (cate:any) => {
    const url = `/categories`;
    return instance.post(url, cate);
}   

