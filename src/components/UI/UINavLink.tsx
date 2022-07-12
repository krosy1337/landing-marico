import React, {FC, PropsWithChildren} from 'react'
import {Typography, useTheme} from "@mui/material"
import {NavLink} from "react-router-dom"

interface UiNavLinkProps {
    to: string
}

const UiNavLink: FC<PropsWithChildren<UiNavLinkProps>> = ({children, to}) => {
    const theme = useTheme()
    return (
        <NavLink to={to}
                 style={
                     ({isActive}) => ({
                         textDecoration: "none",
                         color: isActive ? theme.palette.primary.main : "inherit",
                         transition: ".2s",
                     })}>
            <Typography variant="body1" component="div" fontFamily="inherit">{children}</Typography>
        </NavLink>
    )
}

export default UiNavLink