import React, {FC} from "react"
import {Box, Grid, Stack, Typography} from "@mui/material"
import smile from "assets/emojis/smile.svg"
import happy from "assets/emojis/happy.svg"
import party from "assets/emojis/party.svg"
import MContainer from "components/Motion/MContainer"
import MTypography from "components/Motion/MTypography"
import MGrid from "components/Motion/MGrid"

const typographyVariants = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
}

const itemVariants = {
    hidden: {
        scale: 0,
    },
    visible: (custom: number) => ({
        scale: 1,
        transition: {
            delay: custom * 0.2,
            type: "spring",
        },
    }),
}

const WhyLoveMarico: FC = () => {
    return (
        <MContainer maxWidth="lg" sx={{
            marginBottom: {
                xs: 4,
                md: 6,
                lg: 10,
            },
        }} initial="hidden" whileInView="visible" viewport={{amount: 0.4}}>
            <MTypography variant="h2" fontWeight={700} align="center" fontFamily="inherit" sx={{
                marginBottom: {
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                },
                fontSize: {
                    xs: "1.25rem",
                    sm: "2rem",
                    md: "3rem",
                    lg: "5rem",
                },
            }} variants={typographyVariants}>
                Why Creators Love Marico</MTypography>
            <Grid container rowGap={2} columnGap={1} justifyContent="center">
                <MGrid item lg={3} md={5} xs={12}
                       sx={{display: "flex", flexDirection: "column", alignItems: "center", rowGap: "5px"}}
                       variants={itemVariants} custom={1}>
                    <Stack direction="row" alignItems="center" columnGap="2px">
                        <Box sx={{
                            width: {
                                xs: 16,
                                md: 25,
                            },
                            display: "flex",
                            alignItems: "end",
                        }}>
                            <img src={smile} alt="smile emoji" style={{width: "inherit"}}/>
                        </Box>
                        <Typography variant="h6" fontFamily="inherit" lineHeight={1} sx={{
                            fontSize: {
                                xs: 14,
                                md: 20,
                            },
                        }}>Reduced Anxiety</Typography>
                    </Stack>
                    <Typography variant="body1" fontFamily="inherit" align="center" sx={{
                        color: "grey.600",
                        fontSize: {
                            xs: 12,
                            md: 14,
                            lg: 16,
                        },
                    }}>
                        Never worry about losing your audience.</Typography>
                </MGrid>
                <MGrid item lg={3} md={5} xs={12}
                       sx={{display: "flex", flexDirection: "column", alignItems: "center", rowGap: "5px"}}
                       variants={itemVariants} custom={2}>
                    <Stack direction="row" alignItems="flex-end" columnGap="2px">
                        <Box sx={{
                            width: {
                                xs: 16,
                                md: 25,
                            },
                            display: "flex",
                            alignItems: "end",
                        }}>
                            <img src={happy} alt="happy emoji" style={{width: "inherit"}}/>
                        </Box>
                        <Typography variant="h6" fontFamily="inherit" lineHeight={1} sx={{
                            fontSize: {
                                xs: 14,
                                md: 20,
                            },
                        }}>Lower Workload</Typography>
                    </Stack>
                    <Typography variant="body1" fontFamily="inherit" align="center" sx={{
                        color: "grey.600",
                        fontSize: {
                            xs: 12,
                            md: 14,
                            lg: 16,
                        },
                    }}>
                        Just share one link. We'll handle the rest.</Typography>
                </MGrid>
                <MGrid item lg={3} md={5} xs={12}
                       sx={{display: "flex", flexDirection: "column", alignItems: "center", rowGap: "5px"}}
                       variants={itemVariants} custom={3}>
                    <Stack direction="row" alignItems="flex-end" columnGap="2px">
                        <Box sx={{
                            width: {
                                xs: 16,
                                md: 25,
                            },
                            display: "flex",
                            alignItems: "end",
                        }}>
                            <img src={party} alt="party emoji" style={{width: "inherit"}}/>
                        </Box>
                        <Typography variant="h6" fontFamily="inherit" lineHeight={1} sx={{
                            fontSize: {
                                xs: 14,
                                md: 20,
                            },
                        }}>More Time</Typography>
                    </Stack>
                    <Typography variant="body1" fontFamily="inherit" align="center" sx={{
                        color: "grey.600",
                        fontSize: {
                            xs: 12,
                            md: 14,
                            lg: 16,
                        },
                    }}>
                        Spend less time on marketing tools</Typography>
                </MGrid>
            </Grid>
        </MContainer>
    )
}

export default WhyLoveMarico