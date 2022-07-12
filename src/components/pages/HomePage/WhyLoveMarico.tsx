import React, {FC} from 'react'
import {Container, Grid, Stack, Typography} from "@mui/material"
import smile from "assets/emojis/smile.svg"
import happy from "assets/emojis/happy.svg"
import party from "assets/emojis/party.svg"

const WhyLoveMarico: FC = () => {
    return (
        <Container maxWidth="lg" sx={{marginBottom: 10,}}>
            <Typography variant="h2" fontWeight={700} align="center" fontFamily="inherit" sx={{marginBottom: 4,}}>
                Why Creators Love Marico</Typography>
            <Grid container>
                <Grid item xl={4} sx={{display: "flex", flexDirection: "column", alignItems: "center", rowGap: "5px"}}>
                    <Stack direction="row" alignItems="flex-end" columnGap="2px">
                        <img src={smile} alt="smile emoji" width={25}/>
                        <Typography variant="h6" fontFamily="inherit" lineHeight={1}>Reduced Anxiety</Typography>
                    </Stack>
                    <Typography variant="body1" fontFamily="inherit" sx={{color: "grey.600"}}>
                        Never worry about losing your audience.</Typography>
                </Grid>
                <Grid item xl={4} sx={{display: "flex", flexDirection: "column", alignItems: "center", rowGap: "5px"}}>
                    <Stack direction="row" alignItems="flex-end" columnGap="2px">
                        <img src={happy} alt="happy emoji" width={25}/>
                        <Typography variant="h6" fontFamily="inherit" lineHeight={1}>Lower Workload</Typography>
                    </Stack>
                    <Typography variant="body1" fontFamily="inherit" sx={{color: "grey.600"}}>
                        Just share one link. We'll handle the rest.</Typography>
                </Grid>
                <Grid item xl={4} sx={{display: "flex", flexDirection: "column", alignItems: "center", rowGap: "5px"}}>
                    <Stack direction="row" alignItems="flex-end" columnGap="2px">
                        <img src={party} alt="party emoji" width={25}/>
                        <Typography variant="h6" fontFamily="inherit" lineHeight={1}>More Time</Typography>
                    </Stack>
                    <Typography variant="body1" fontFamily="inherit" sx={{color: "grey.600"}}>
                        Spend less time on marketing tools</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default WhyLoveMarico