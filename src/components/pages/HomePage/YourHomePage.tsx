import React, {FC} from "react"
import {Box, Container, List, ListItem, Stack, Typography} from "@mui/material"
import image from "assets/laptop_yourhomepage.jpg"
import MBox from "components/Motion/MBox"
import MTypography from "components/Motion/MTypography"
import MButton from "components/Motion/MButton"
import MGreyButton from "components/Motion/MGreyButton"

const imageVariants = {
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

const typographyVariants = {
    hidden: {
        opacity: 0,
        x: -200,
    },
    visible: (custom: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.2 * custom,
            type: "spring",
        },
    }),
}

const buttonVariants = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: (custom: number) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.2 * custom,
            type: "spring",
            stiffness: 100,
        },
    }),
}

const YourHomePage: FC = () => {
    return (
        <Container maxWidth="lg" sx={{
            display: "flex",
            alignItems: {xs: "normal", md: "flex-start"},
            justifyContent: "space-between",
            marginBottom: {
                xs: 4,
                sm: 6,
                md: 8,
                lg: 10,
            },
            flexDirection: {
                xs: "column",
                md: "row",
            },
        }}>
            <MBox sx={{
                width: {
                    xs: "100%",
                    md: "50%",
                },
                flexGrow: 0,
                marginRight: {
                    xs: 0,
                    lg: 20,
                },
            }} initial="hidden" whileInView="visible">
                <MTypography variant="h6" fontFamily="inherit" fontWeight={500} sx={{
                    marginBottom: {
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 5,
                    },
                    fontSize: {
                        xs: "1rem",
                        sm: "1.10rem",
                        md: "1.20rem",
                        lg: "1.25rem",
                    }
                }} variants={typographyVariants} custom={0}>Your
                    Homepage</MTypography>
                <MTypography variant="h3" fontFamily="inherit" fontWeight={600} sx={{
                    marginBottom: {
                        xs: 0,
                        sm: 0.2,
                        md: 0.5,
                        lg: 1,
                    }, fontSize: {
                        xs: "1.5rem",
                        sm: "2rem",
                        md: "2.5rem",
                        lg: "3rem",
                    }
                }} variants={typographyVariants} custom={1}>Your
                    Content.</MTypography>
                <MBox sx={{
                    marginBottom: {
                        xs: 0.5,
                        sm: 1,
                        md: 1.5,
                        lg: 2,
                    }, fontSize: {
                        xs: "1.5rem",
                        sm: "2rem",
                        md: "2.5rem",
                        lg: "3rem",
                    }
                }} variants={typographyVariants} custom={1}>
                    <Typography variant="h3" fontFamily="inherit" fontWeight={600} fontSize="inherit" component="span"
                                sx={{marginRight: 1,}}>All in</Typography>
                    <Typography variant="h3" fontFamily="inherit" fontWeight={600} color="primary" fontSize="inherit"
                                component="span">One
                        Spot</Typography>
                </MBox>
                <List sx={{
                    padding: 0, marginBottom: {
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                    }, display: "flex", flexDirection: "column", rowGap: 1,
                }}>
                    <ListItem sx={{padding: 0}}>
                        <MBox sx={{display: "flex", alignItems: "center", columnGap: 1}}
                              variants={typographyVariants} custom={2}>
                            <Box sx={{
                                width: {
                                    xs: 20,
                                    sm: 22,
                                    md: 24,
                                    lg: 26,
                                },
                                height: {
                                    xs: 20,
                                    sm: 22,
                                    md: 24,
                                    lg: 26,
                                },
                                backgroundColor: "grey.800",
                                borderRadius: 50,
                                textAlign: "center",
                                lineHeight: {
                                    xs: "20px",
                                    sm: "22px",
                                    md: "24px",
                                    lg: "26px",
                                },
                                fontSize: {
                                    xs: "0.7rem",
                                    sm: "0.8rem",
                                    md: "0.9rem",
                                    lg: "1rem",
                                },
                            }}>
                                1
                            </Box>
                            <Typography variant="body1" fontFamily="inherit" sx={{
                                fontSize: {
                                    xs: "0.7rem",
                                    sm: "0.8rem",
                                    md: "0.9rem",
                                    lg: "1rem",
                                },
                            }}>Bring all of your content together into one
                                homepage.</Typography>
                        </MBox>
                    </ListItem>
                    <ListItem sx={{padding: 0}}>
                        <MBox sx={{display: "flex", alignItems: "center", columnGap: 1}}
                              variants={typographyVariants} custom={2.3}>
                            <Box sx={{
                                width: {
                                    xs: 20,
                                    sm: 22,
                                    md: 24,
                                    lg: 26,
                                },
                                height: {
                                    xs: 20,
                                    sm: 22,
                                    md: 24,
                                    lg: 26,
                                },
                                backgroundColor: "grey.800",
                                borderRadius: 50,
                                textAlign: "center",
                                lineHeight: {
                                    xs: "20px",
                                    sm: "22px",
                                    md: "24px",
                                    lg: "26px",
                                },
                                fontSize: {
                                    xs: "0.7rem",
                                    sm: "0.8rem",
                                    md: "0.9rem",
                                    lg: "1rem",
                                },
                            }}>
                                2
                            </Box>
                            <Typography variant="body1" fontFamily="inherit" sx={{
                                fontSize: {
                                    xs: "0.7rem",
                                    sm: "0.8rem",
                                    md: "0.9rem",
                                    lg: "1rem",
                                },
                            }}>Your page automatically updates whenever
                                you create.</Typography>
                        </MBox>
                    </ListItem>
                </List>
                <Stack alignItems="center" rowGap={1} columnGap={2} sx={{
                    marginBottom: {
                        xs: 1,
                        lg: 2,
                    },
                    flexDirection: {
                        xs: "column",
                        sm: "row",
                    },
                    width: "100%",
                }}>
                    <MButton variant="contained"
                             sx={{
                                 fontFamily: "inherit", fontWeight: 400,
                                 width: {
                                     xs: "100%",
                                     sm: 150,
                                     md: 180,
                                     lg: 200,
                                 },
                                 height: {
                                     xs: 30,
                                     md: 40,
                                     lg: 50,
                                 },
                                 fontSize: {
                                     xs: 10,
                                     md: 11,
                                     lg: 12,
                                 },
                             }}
                             initial="hidden" whileInView="visible" variants={buttonVariants} custom={0}
                    >
                        Get Started
                        Now</MButton>
                    <MGreyButton variant="outlined" sx={{
                        fontFamily: "inherit", fontWeight: 400,
                        width: {
                            xs: "100%",
                            sm: 150,
                            md: 180,
                            lg: 200,
                        },
                        height: {
                            xs: 30,
                            md: 40,
                            lg: 50,
                        },
                        fontSize: {
                            xs: 10,
                            md: 11,
                            lg: 12,
                        },
                    }} initial="hidden" whileInView="visible" variants={buttonVariants} custom={1}
                    >View A
                        Demo</MGreyButton>
                </Stack>
            </MBox>
            <MBox sx={{
                position: "relative", display: {
                    xs: "none",
                    md: "flex",
                },
            }} initial="hidden" whileInView="visible" variants={imageVariants}>
                <Box sx={{
                    height: {
                        md: 210,
                        lg: 320,
                    },
                    width: {
                        md: 290,
                        lg: 444,
                    },
                    zIndex: 1,
                    position: "relative",
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    boxShadow: "0px 30px 50px rgba(0, 0, 0, 0.4)"
                }}>
                </Box>
                <Box sx={{position: "absolute", bottom: "-40%", left: "50%", transform: "translateX(-50%)"}}>
                    <svg width="200" height="276" viewBox="0 0 309 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="309" height="276" fill="#8B8B8B"/>
                    </svg>
                </Box>
            </MBox>
        </Container>
    )
}

export default YourHomePage