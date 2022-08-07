export const currency = (x:any) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
export const findString = (str:any, sub:any) =>{
    return str.repace(/[.]/g," ")
}