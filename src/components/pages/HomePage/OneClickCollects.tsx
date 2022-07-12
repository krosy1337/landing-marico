import {Button, Card, CardContent, CardMedia, Container, Grid, Typography, useTheme} from '@mui/material'
import React, {FC} from 'react'
import phone from "assets/mobile.png"

const OneClickCollects: FC = () => {
    const {palette} = useTheme()
    return (
        <Container maxWidth="lg" sx={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 10,}}>
            <Grid container direction="row" sx={{marginBottom: 5}} wrap="wrap">
                <Grid item lg={6} sx={{paddingX: 1,}}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1" color={palette.success.light} fontFamily="inherit" sx={{marginBottom: 2,}}>One Link</Typography>
                            <Typography variant="h4" color="grey.700" fontFamily="inherit" fontWeight={600}>ALL You Create.</Typography>
                            <Typography variant="h4" fontFamily="inherit" fontWeight={600}>One Link</Typography>
                        </CardContent>
                        <CardMedia component="img" src={phone} alt="phone" height={200} sx={{paddingLeft: 4,}} />
                    </Card>
                </Grid>
                <Grid item lg={6} sx={{paddingX: 1,}}>
                    <Card sx={{height: "100%"}}>
                        <CardContent>
                            <Typography variant="body1" color={palette.success.light} fontFamily="inherit" sx={{marginBottom: 8,}}>Collect Subscribers</Typography>
                            <Typography variant="h3" color="grey.700" fontFamily="inherit" fontWeight={700}>
                                Emails.</Typography>
                            <Typography variant="h3" color="grey.700" fontFamily="inherit" fontWeight={700}>
                                Phone #s.</Typography>
                            <Typography variant="h3" fontFamily="inherit" fontWeight={700}>All Yours.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Button variant="contained"
                    sx={{height: 40, width: 200, fontFamily: "inherit", fontSize: 12, fontWeight: 500,}}>
                Get Started
            </Button>
        </Container>
    )
}

export default OneClickCollects