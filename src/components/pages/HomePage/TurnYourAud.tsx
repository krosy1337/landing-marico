import React, {FC} from "react"
import {Button, Container, Stack, Typography} from "@mui/material"
import dot from "assets/green_dot.svg"
import GreyButton from "components/UI/GreyButton"

const TurnYourAud: FC = () => {
    return (
        <Container maxWidth="md" sx={{
            marginTop: 15,
            marginBottom: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Typography variant="h4" align="center" fontFamily="inherit" fontWeight={500} sx={{marginBottom: 4,}}>Turn
                your audience into email
                and
                text message subscribers.</Typography>
            <Stack direction="row" alignItems="center" justifyContent="center" columnGap={2} sx={{marginBottom: 2,}}>
                <Button variant="contained"
                        sx={{height: 50, width: 200, fontFamily: "inherit", fontSize: 12, fontWeight: 400,}}>Get Started
                    Now</Button>
                <GreyButton variant="outlined" sx={{
                    height: 50, width: 200, fontFamily: "inherit", fontWeight: 400, fontSize: 12,
                }}>View A Demo</GreyButton>
            </Stack>
            <Stack direction="row" columnGap="2px">
                <img src={dot} alt="dot" width={20} style={{alignSelf: "start"}}/>
                <Stack direction="row" columnGap={1} alignItems="center">
                    <Typography variant="body1" fontFamily="inherit" fontWeight={700}>1000+</Typography>
                    <Typography variant="body1" fontFamily="inherit" sx={{color: "grey.600"}}>creators have already
                        started</Typography>
                </Stack>
            </Stack>
        </Container>
    )
}

export default TurnYourAud