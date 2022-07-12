import React, {FC} from 'react'
import {Container, Typography} from "@mui/material"
import styles from "styles/home.module.scss"

const MainHeading: FC = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h1" fontFamily="inherit" fontWeight="700" align="center">Own your audience.</Typography>
            <Typography variant="h1" fontFamily="inherit" fontWeight="700" align="center"
                        className={styles.gradientText}>So you don't lose them.</Typography>
        </Container>
    )
}

export default MainHeading