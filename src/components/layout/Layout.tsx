import React, {FC} from "react"
import {Outlet} from "react-router-dom"
import {CssBaseline} from "@mui/material"

const Layout: FC = () => {
    return (
        <>
            <CssBaseline/>
            <Outlet/>
        </>
    )
}

export default Layout