import React, {FC} from "react"
import {Box, Container, Typography} from "@mui/material"
import image from "assets/twitts.jpg"

const ExpertsAgree: FC = () => {
    return (
        <Container maxWidth="lg" sx={{
            marginBottom: {
                xs: 4,
                sm: 6,
                md: 8,
                lg: 10,
            },
        }}>
            <Typography variant="h2" align="center" fontFamily="inherit" fontWeight={600} sx={{
                marginBottom: {
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 5,
                },
                fontSize: {
                    xs: "2rem",
                    sm: "3rem",
                    md: "3.5rem",
                    lg: "3.75rem",
                }
            }}>
                Experts Agree</Typography>
            <Box sx={{
                height: 280,
                position: "relative",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: {
                    xs: "cover",
                    md: "contain",
                },
                opacity: 0.45,
            }}>
            </Box>
        </Container>
    )
}

export default ExpertsAgree