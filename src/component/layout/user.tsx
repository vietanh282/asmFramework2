import React from "react";
import {Outlet} from 'react-router-dom'
import Header from "../MenuHeader";


const UserLayout = (props: any) => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default UserLayout