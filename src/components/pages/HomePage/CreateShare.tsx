import React, {FC} from "react"
import {Box, Button, Container, List, ListItem, Stack, Typography} from "@mui/material"
import image from "assets/desktop_create_share.jpg"
import GreyButton from "components/UI/GreyButton"

const CreateShare: FC = () => {
    return (
        <Container maxWidth="lg" sx={{
            display: "flex", alignItems: {xs: "normal", md: "flex-start"},
            justifyContent: "space-between", marginBottom: {
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
            <Box sx={{
                width: {
                    xs: "100%",
                    md: "50%",
                },
                flexGrow: 0,
                marginRight: {
                    xs: 0,
                    lg: 20,
                },
            }}>
                <Typography variant="h6" fontFamily="inherit" fontWeight={500} sx={{
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
                    },
                }}>
                    Create & Share</Typography>
                <Typography variant="h3" fontFamily="inherit" fontWeight={600} sx={{
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
                    },
                }}>
                    Reach Your</Typography>
                <Box sx={{
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
                }}>
                    <Typography variant="h3" fontFamily="inherit" fontWeight={600} fontSize="inherit" component="span"
                                sx={{marginRight: 1,}}>Audience</Typography>
                    <Typography variant="h3" fontFamily="inherit" fontWeight={600} color="primary" fontSize="inherit"
                                component="span">
                        Directly.</Typography>
                </Box>
                <List sx={{
                    padding: 0, marginBottom: {
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                    }, display: "flex", flexDirection: "column", rowGap: 1,
                }}>
                    <ListItem sx={{padding: 0}}>
                        <Box sx={{display: "flex", alignItems: "center", columnGap: 1}}>
                            <Box sx={{
                                backgroundColor: "grey.800",
                                borderRadius: 50,
                                textAlign: "center",
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
                            }}>
                                Embed content or create something new to share.</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={{padding: 0}}>
                        <Box sx={{display: "flex", alignItems: "center", columnGap: 1}}>
                            <Box sx={{
                                backgroundColor: "grey.800",
                                borderRadius: 50,
                                textAlign: "center",
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
                            }}>
                                Share content over email, text message or your homepage.</Typography>
                        </Box>
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
                    <Button variant="contained"
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
                            }}>Get Started
                        Now</Button>
                    <GreyButton variant="outlined" sx={{
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
                    }}>View A Demo</GreyButton>
                </Stack>
            </Box>
            <Box sx={{
                position: "relative", display: {
                    xs: "none",
                    md: "flex",
                },
            }}>
                <Box sx={{
                    height: {
                        md: 210,
                        lg: 320,
                    },
                    width: {
                        md: 290,
                        lg: 444,
                    }, zIndex: 1, position: "relative",
                    backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain",
                    boxShadow: "0px 30px 50px rgba(100, 100, 100, 0.498039)"
                }}>
                </Box>
                <Box sx={{position: "absolute", bottom: "-40%", left: "50%", transform: "translateX(-50%)"}}>
                    <svg width="200" height="276" viewBox="0 0 309 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="309" height="276" fill="#8B8B8B"/>
                    </svg>
                </Box>
            </Box>
        </Container>
    )
}

export default CreateShare