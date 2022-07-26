import React, {FC} from "react"
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Typography
} from "@mui/material"
import logo from "assets/logo.svg"
import {Link} from "react-router-dom"
import {RouteNames} from "routes"
import UiNavLink from "./UI/UINavLink"
import MenuIcon from "@mui/icons-material/Menu"

const Header: FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar sx={{height: 56, backgroundColor: "transparent", fontFamily: "Poppins",}} position="static">
            <Container maxWidth="lg"
                       sx={{height: "100%",}}>
                <Toolbar
                    sx={{display: {md: "flex", xs: "none"}, alignItems: "center", justifyContent: "space-between"}}>
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
                                sx={{
                                    fontFamily: "inherit",
                                    color: "grey.600",
                                    fontSize: 14,
                                    textTransform: "none"
                                }}>Login</Button>
                        <Button variant="contained"
                                sx={{fontFamily: "inherit", fontSize: 14, fontWeight: 500, textTransform: "none"}}>Sign
                            Up</Button>
                    </Stack>
                </Toolbar>
                <Toolbar
                    sx={{
                        display: {md: "none", xs: "flex"},
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingX: {xs: 1,}
                    }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Link to={RouteNames.ROOT} style={{textDecoration: "none", color: "inherit"}}>
                        <Box sx={{display: "flex", alignItems: "center", columnGap: 1,}}>
                            <Avatar src={logo} variant="square"/>
                            <Typography variant="h6" component="div" fontFamily="inherit"
                                        fontWeight={800}>Marico</Typography>
                        </Box>
                    </Link>
                    <Menu anchorEl={anchorElNav}
                          anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                          }}
                          keepMounted
                          transformOrigin={{
                              vertical: "top",
                              horizontal: "left",
                          }}
                          open={!!anchorElNav}
                          onClose={handleCloseNavMenu}
                    >
                        <MenuItem>
                            <UiNavLink to={RouteNames.ABOUT}>About</UiNavLink>
                        </MenuItem>
                        <MenuItem>
                            <UiNavLink to={RouteNames.PRICING}>Pricing</UiNavLink>
                        </MenuItem>
                        <MenuItem>
                            <UiNavLink to={RouteNames.BLOG}>Blog</UiNavLink>
                        </MenuItem>
                        <MenuItem>
                            <UiNavLink to={RouteNames.BLOG}>Blog</UiNavLink>
                        </MenuItem>
                    </Menu>
                    <Stack direction="row" columnGap={1} alignItems="center">
                        <Button variant="text"
                                sx={{
                                    fontFamily: "inherit",
                                    color: "grey.600",
                                    fontSize: 14,
                                    textTransform: "none"
                                }}>Login</Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header