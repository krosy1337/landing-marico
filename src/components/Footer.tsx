import React, {FC} from "react"
import {AppBar, Avatar, Container, Stack, Typography} from "@mui/material"
import {Link} from "react-router-dom"
import {RouteNames} from "routes"
import logo from "assets/logo.svg"
import UiNavLink from "components/UI/UINavLink"

const Footer: FC = () => {
    return (
        <AppBar sx={{height: 56, backgroundColor: "transparent", fontFamily: "Poppins", marginBottom: 5,}}
                position="static">
            <Container maxWidth="lg"
                       sx={{
                           height: "100%", display: "flex", alignItems: "center",
                           justifyContent: "space-between",
                       }}>
                <Stack rowGap={1}>
                    <Link to={RouteNames.ROOT} style={{textDecoration: "none", color: "inherit"}}>
                        <Stack direction="row" columnGap={1} alignItems="center">
                            <Avatar src={logo} variant="square"/>
                            <Typography variant="h6" component="div" fontFamily="inherit"
                                        fontWeight={800}>Marico</Typography>
                        </Stack>
                    </Link>
                    <Typography variant="body1" fontFamily="inherit"
                                sx={{color: "grey.600"}}>info@marico.com</Typography>
                </Stack>
                <Stack direction={{xs: "column", sm: "row"}} columnGap={1} alignItems="center">
                    <UiNavLink to={RouteNames.PRICING}>Pricing</UiNavLink>
                    <UiNavLink to={RouteNames.BLOG}>Blog</UiNavLink>
                </Stack>
            </Container>
        </AppBar>
    )
}

export default Footer