import React, {FC} from "react"
import {Outlet} from "react-router-dom"
import {CssBaseline} from "@mui/material"
import Header from "../Header"

const Layout: FC = () => {
    return (
        <>
            <Header/>
            <CssBaseline/>
            <Outlet/>
        </>
    )
}

export default Layout