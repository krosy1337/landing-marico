import React, {FC} from 'react'
import {AppBar, Avatar, Box, Button, Container, Stack, Typography} from "@mui/material"
import logo from "assets/logo.svg"
import {Link} from "react-router-dom"
import {RouteNames} from 'routes'
import UiNavLink from "./UI/UINavLink"

const Header: FC = () => {
    return (
        <AppBar sx={{height: 56, backgroundColor: "transparent", fontFamily: "Poppins",}} position="static">
            <Container maxWidth="lg" sx={{height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <Link to={RouteNames.ROOT} style={{textDecoration: "none", color: "inherit"}}>
                    <Box sx={{display: "flex", alignItems: "center", columnGap: 1,}}>
                        <Avatar src={logo} variant="square"/>
                        <Typography variant="h6" component="div" fontFamily="inherit"
                                    fontWeight={800}>Marico</Typography>
                    </Box>
                </Link>
                <Stack direction="row" columnGap={1} alignItems="center">
                    <UiNavLink to={RouteNames.ABOUT}>About</UiNavLink>
                    <UiNavLink to={RouteNames.PRICING}>Pricing</UiNavLink>
                    <UiNavLink to={RouteNames.BLOG}>Blog</UiNavLink>
                </Stack>
                <Stack direction="row" columnGap={1} alignItems="center">
                    <Button variant="text"
                            sx={{fontFamily: "inherit", color: "grey.600", fontSize: 14, textTransform: "none"}}>Login</Button>
                    <Button variant="contained"
                            sx={{fontFamily: "inherit", fontSize: 14, fontWeight: 500, textTransform: "none"}}>Sign
                        Up</Button>
                </Stack>
            </Container>
        </AppBar>
    )
}

export default Header