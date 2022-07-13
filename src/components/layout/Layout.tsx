import React, {FC} from "react"
import {Outlet} from "react-router-dom"
import {Box, CssBaseline} from "@mui/material"
import Header from "../Header"
import Footer from "components/Footer"

const Layout: FC = () => {
    return (
        <>
            <CssBaseline/>
            <Box sx={{height: "100vh", display: "flex", flexDirection: "column"}}>
                <Header/>
                <Box sx={{flexGrow: 1}}>
                    <Outlet/>
                </Box>
                <Footer/>
            </Box>
        </>
    )
}

export default Layout