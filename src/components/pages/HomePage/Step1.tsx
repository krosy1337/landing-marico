import React, {FC} from 'react'
import {Container, Typography} from "@mui/material"
import GreyButton from "components/UI/GreyButton"

const Step1: FC = () => {
    return (
        <Container maxWidth="md" sx={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 10,}}>
            <Typography variant="h6" color="primary" fontFamily="inherit" fontWeight={500} align="center" sx={{marginBottom: 2,}}>
                STEP 1</Typography>
            <Typography variant="h3" fontFamily="inherit" fontWeight={600} align="center" sx={{marginBottom: 2,}}>
                Connect Your Content</Typography>
            <Typography variant="h6" component="p" fontFamily="inherit" fontWeight={400} align="center"
                        sx={{marginBottom: 2, color: "grey.600",}}>
                Bring all of your content together and get a Homepage that
                automatically updates whenever you create anywhere online.</Typography>
            <GreyButton variant="outlined" sx={{
                height: 50, width: 200, fontFamily: "inherit", fontWeight: 400, fontSize: 12,
            }}>View Avaliable Sources</GreyButton>
        </Container>
    )
}

export default Step1