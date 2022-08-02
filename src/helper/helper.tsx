export const currency = (x:any) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}