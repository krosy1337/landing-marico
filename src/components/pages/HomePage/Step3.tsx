import React, {FC} from 'react'
import {Container, Typography} from "@mui/material"

const Step3: FC = () => {
    return (
        <>
            <Container maxWidth="lg"
                       sx={{display: "flex", flexDirection: "column", alignItems: "center",}}>
                <Typography variant="h6" color="primary" fontFamily="inherit" fontWeight={500} align="center"
                            sx={{marginBottom: 2,}}>
                    STEP 3</Typography>
                <Typography variant="h3" fontFamily="inherit" fontWeight={600} align="center" sx={{marginBottom: 2,}}>
                    Send Emails & Text Messages</Typography>
            </Container>
            <Container maxWidth="md"
                       sx={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 10,}}>
                <Typography variant="h6" component="p" fontFamily="inherit" fontWeight={400} align="center"
                            sx={{marginBottom: 2, color: "grey.600",}}>
                    No more going through a social platform. Reach and engage
                    your audience directly over email and text massage.
                </Typography>
            </Container>
        </>
    )
}

export default Step3