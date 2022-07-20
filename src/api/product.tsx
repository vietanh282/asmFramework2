import instance from "./instance"; 


export const listProduct:any = () => {
    const url = `/products`;
    return instance.get(url);
}

export const add:any = (product:any) => {
    const url = `/products`;
    return instance.post(url, product);
}  

export const editProduct:any = (product:any) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}   

export const removeProduct:any = (id:any) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}   
