import React, {FC} from "react"
import {Container} from "@mui/material"
import styles from "styles/home.module.scss"
import MTypography from "components/Motion/MTypography"

const variants = {
    hidden: {
        y: -100,
    },
    visible: {
        y: 0,
    }
}

const MainHeading: FC = () => {
    return (
        <Container maxWidth="lg">
            <MTypography variant="h1" fontFamily="inherit" fontWeight="700"
                         align="center"
                         sx={{
                             fontSize: {
                                 xs: "1.75rem",
                                 sm: "3rem",
                                 md: "4rem",
                                 lg: "6rem",
                             },
                         }} initial="hidden" whileInView="visible" variants={variants}>Own your
                audience.</MTypography>
            <MTypography variant="h1" fontFamily="inherit" fontWeight="700" align="center"
                         className={styles.gradientText} sx={{
                fontSize: {
                    xs: "1.75rem",
                    sm: "3rem",
                    md: "4rem",
                    lg: "6rem",
                },
            }}
                         initial="hidden" whileInView="visible" variants={variants}>So you don't lose
                them.</MTypography>
        </Container>
    )
}

export default MainHeading