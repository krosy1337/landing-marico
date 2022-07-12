import React, {FC} from 'react'
import {Container, Typography} from "@mui/material"

const Step2: FC = () => {
    return (
        <Container maxWidth="md" sx={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 10,}}>
            <Typography variant="h6" color="primary" fontFamily="inherit" fontWeight={500} align="center" sx={{marginBottom: 2,}}>
                STEP 2</Typography>
            <Typography variant="h3" fontFamily="inherit" fontWeight={600} align="center" sx={{marginBottom: 2,}}>
                Share Your Homepage</Typography>
            <Typography variant="h6" component="p" fontFamily="inherit" fontWeight={400} align="center"
                        sx={{marginBottom: 2, color: "grey.600",}}>
                Share your Wavium homepage link with your followers, and
                we'll handle the rest.</Typography>
        </Container>
    )
}

export default Step2