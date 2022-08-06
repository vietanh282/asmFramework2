import instance from "./instance"


export const register = (user:any) => {
    const url = "/signup"
    return instance.post(url, user)  
}
export const login = (user:any) => {
    const url = "/signin"
    return instance.post(url, user)  
}