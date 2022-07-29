import {Card, CardContent, CardMedia, Grid, Typography, useTheme} from "@mui/material"
import React, {FC} from "react"
import phone from "assets/mobile.png"
import MContainer from "components/Motion/MContainer"
import MGrid from "components/Motion/MGrid"
import MButton from "components/Motion/MButton"

const leftVariants = {
    hidden: {
        opacity: 0,
        x: -200,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
        },
    },
}

const rightVariants = {
    hidden: {
        opacity: 0,
        x: 200,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
        },
    },
}

const buttonVariants = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
        },
    },
}

const OneClickCollects: FC = () => {
    const {palette} = useTheme()
    return (
        <MContainer maxWidth="lg" sx={{
            display: "flex", flexDirection: "column", alignItems: "center", marginBottom: {
                xs: 4,
                sm: 6,
                md: 8,
                lg: 10,
            },
        }} initial="hidden" whileInView="visible">
            <Grid container direction="row" sx={{
                marginBottom: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                    lg: 5,
                }, rowGap: {
                    xs: 1,
                    sm: 2,
                }
            }} wrap="wrap">
                <MGrid item md={6} xs={12} sx={{paddingX: {xs: 0, md: 1,},}} variants={leftVariants}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1" color={palette.success.light} fontFamily="inherit"
                                        sx={{
                                            marginBottom: {
                                                xs: 0,
                                                sm: 0.5,
                                                md: 1,
                                                lg: 2,
                                            },
                                            fontSize: {
                                                xs: 12,
                                                sm: 14,
                                                md: 16,
                                            },
                                        }}>One Link</Typography>
                            <Typography variant="h4" color="grey.700" fontFamily="inherit" fontWeight={600} sx={{
                                fontSize: {
                                    xs: "1.25rem",
                                    sm: "1.5rem",
                                    md: "1.75rem",
                                    lg: "2rem",
                                },
                            }}>ALL
                                You
                                Create.</Typography>
                            <Typography variant="h4" fontFamily="inherit" fontWeight={600} sx={{
                                fontSize: {
                                    xs: "1.25rem",
                                    sm: "1.5rem",
                                    md: "1.75rem",
                                    lg: "2rem",
                                },
                            }}>One Link</Typography>
                        </CardContent>
                        <CardMedia component="img" src={phone} alt="phone" height={200} sx={{
                            paddingLeft: {
                                xs: 2,
                                md: 3,
                                lg: 4,
                            },
                            height: {
                                xs: 150,
                                sm: 200,
                                md: 200,
                                lg: 200,
                            },
                        }}/>
                    </Card>
                </MGrid>
                <MGrid item md={6} xs={12} sx={{paddingX: {xs: 0, md: 1,},}} variants={rightVariants}>
                    <Card sx={{height: {xs: 250, sm: 316, md: 333, lg: 350,}}}>
                        <CardContent>
                            <Typography variant="body1" color={palette.success.light} fontFamily="inherit"
                                        sx={{
                                            marginBottom: {
                                                xs: 6,
                                                sm: 8,
                                            },
                                            fontSize: {
                                                xs: 12,
                                                sm: 14,
                                                md: 16,
                                            },
                                        }}>Collect Subscribers</Typography>
                            <Typography variant="h3" color="grey.700" fontFamily="inherit" fontWeight={700} sx={{
                                fontSize: {
                                    xs: "1.25rem",
                                    sm: "1.5rem",
                                    md: "1.75rem",
                                    lg: "2rem",
                                },
                            }}>
                                Emails.</Typography>
                            <Typography variant="h3" color="grey.700" fontFamily="inherit" fontWeight={700} sx={{
                                fontSize: {
                                    xs: "1.25rem",
                                    sm: "1.5rem",
                                    md: "1.75rem",
                                    lg: "2rem",
                                },
                            }}>
                                Phone #s.</Typography>
                            <Typography variant="h3" fontFamily="inherit" fontWeight={700} sx={{
                                fontSize: {
                                    xs: "1.25rem",
                                    sm: "1.5rem",
                                    md: "1.75rem",
                                    lg: "2rem",
                                },
                            }}>All Yours.</Typography>
                        </CardContent>
                    </Card>
                </MGrid>
            </Grid>
            <MButton variant="contained"
                     sx={{
                         fontFamily: "inherit", fontWeight: 400,
                         width: {
                             xs: "100%",
                             sm: 200,
                             md: 180,
                             lg: 200,
                         },
                         height: {
                             xs: 30,
                             sm: 50,
                             md: 40,
                             lg: 50,
                         },
                         fontSize: {
                             xs: 11,
                             sm: 12,
                             md: 11,
                             lg: 12,
                         },
                     }} variants={buttonVariants}>Get
                Started</MButton>
        </MContainer>
    )
}

export default OneClickCollects