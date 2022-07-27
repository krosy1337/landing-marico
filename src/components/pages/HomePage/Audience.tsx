import React, {FC} from "react"
import {Box, Typography} from "@mui/material"
import image from "assets/audience_bg.jpg"

const Audience: FC = () => {
    return (
        <Box sx={{
            position: "relative",
            height: {
                xs: 100,
                sm: 200,
                md: 300,
                lg: 400,
            },
            backgroundImage: `url(${image})`,
            backgroundRepeat: "repeat",
            backgroundSize: "50%",
            marginBottom: {
                xs: 4,
                sm: 6,
                md: 8,
                lg: 10,
            },
        }}>
            <Typography variant="h3" fontFamily="inherit" fontWeight={600} align="center"
                        sx={{
                            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                            fontSize: {
                                xs: "1rem",
                                sm: "1.5rem",
                                md: "2.25rem",
                                lg: "3rem",
                            },
                            width: {
                                xs: "100%",
                                sm: "75%",
                                lg: "55%",
                            }
                        }}>
                We've helped over 1,000 creatorsre
                claim control of their audience.
            </Typography>
        </Box>
    )
}

export default Audience