import React, {FC} from 'react'
import {Box, Container, Typography} from "@mui/material"
import image from "assets/twitts.jpg"

const ExpertsAgree: FC = () => {
    return (
        <Container maxWidth="lg" sx={{marginBottom: 5,}}>
            <Typography variant="h2" align="center" fontFamily="inherit" fontWeight={600} sx={{marginBottom: 5,}}>
                Experts Agree</Typography>
            <Box sx={{
                height: 280,
                position: "relative",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                opacity: 0.45,
            }}>
            </Box>
        </Container>
    )
}

export default ExpertsAgree