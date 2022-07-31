import React, {FC} from "react"
import MTypography from "components/Motion/MTypography"
import {Container} from "@mui/material"

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

const HeadingText: FC = () => {
    return (
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
                         }} initial="hidden" whileInView="visible" variants={variants}>Content Sources</MTypography>
            <MTypography variant="h1" fontFamily="inherit" fontWeight="400"
                         align="center"
                         sx={{
                             fontSize: {
                                 xs: "1.25rem",
                                 sm: "1.5rem",
                                 md: "1.75rem",
                                 lg: "2rem",
                             },
                         }} initial="hidden" whileInView="visible" variants={variants} custom={1}>Connect these sources
                to your
                Marico homepage.</MTypography>
        </Container>
    )
}

export default HeadingText