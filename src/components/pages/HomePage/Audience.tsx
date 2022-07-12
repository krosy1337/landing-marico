import React, {FC} from 'react'
import {Box, Typography} from "@mui/material"
import image from "assets/audience_bg.jpg"

const Audience: FC = () => {
    return (
        <Box sx={{position: "relative",
            height: 400,
            backgroundImage: `url(${image})`,
            backgroundRepeat: "repeat",
            backgroundSize: "50%",
            marginBottom: 10,
        }}>
            <Typography variant="h3" fontFamily="inherit" fontWeight={600} align="center"
                        sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                We've helped over 1,000 creatorsre
                claim control of their audience.
            </Typography>
        </Box>
    )
}

export default Audience