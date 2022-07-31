import {Box, Container} from "@mui/material"
import React, {FC} from "react"
import MTypography from "components/Motion/MTypography"
import logo from "assets/logo.svg"
import MAvatar from "components/Motion/MAvatar"

const variants = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2 * custom,
            type: "spring",
        },
    }),
}

const ErrorPage: FC = () => {
    return (
        <Box sx={{fontFamily: "Poppins", paddingTop: {xs: 4, sm: 5, md: 10, lg: 15,},}}>
            <Container maxWidth="lg" sx={{
                marginBottom: {
                    xs: 4,
                    sm: 6,
                    md: 8,
                    lg: 10,
                },
            }}>
                <MTypography variant="h1" fontFamily="inherit" fontWeight="700"
                             align="center"
                             sx={{
                                 fontSize: {
                                     xs: "1.75rem",
                                     sm: "3rem",
                                     md: "4rem",
                                     lg: "6rem",
                                 },
                                 mb: {
                                     xs: 2,
                                     sm: 4,
                                     md: 6,
                                     lg: 8,
                                 },
                             }} initial="hidden" whileInView="visible" variants={variants}>Page not found
                    :(</MTypography>
                <MAvatar src={logo} variant="square" sx={{
                    height: "auto", width: {
                        xs: 75,
                        sm: 100,
                        md: 150,
                        lg: 200,
                    }, marginBottom: {
                        xs: 0,
                        sm: 1,
                        md: 2,
                        lg: 3,
                    },
                    mx: "auto",
                }} initial="hidden" whileInView="visible" variants={variants}/>
            </Container>
        </Box>
    )
}

export default ErrorPage