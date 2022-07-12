import React, {FC} from "react"
import {Avatar, Button, Container, Stack, Typography} from "@mui/material"
import logo from "assets/logo.svg"
import dot from "assets/green_dot.svg"

const GetStart: FC = () => {
    return (
        <Container maxWidth="lg"
                   sx={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 10,}}>
            <Avatar src={logo} variant="square" sx={{height: "auto", width: 125, marginBottom: 3,}}/>
            <Typography variant="h2" fontWeight={700} fontFamily="inherit" sx={{marginBottom: 1,}}>Get Started
                Now</Typography>
            <Typography variant="h4" fontWeight={400} fontFamily="inherit" sx={{marginBottom: 2,}}>
                Setup is easy and takes under 5 minutes.
            </Typography>
            <Button variant="contained"
                    sx={{
                        height: 50,
                        width: 200,
                        fontFamily: "inherit",
                        fontSize: 12,
                        fontWeight: 500,
                        marginBottom: 1,
                    }}>
                Get Started Now
            </Button>
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

export default GetStart