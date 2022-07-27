import React, {FC} from "react"
import {Avatar, Box, Button, Container, Stack, Typography} from "@mui/material"
import logo from "assets/logo.svg"
import dot from "assets/green_dot.svg"
import styles from "styles/home.module.scss"

const GetStart: FC = () => {
    return (
        <Container maxWidth="lg"
                   sx={{
                       display: "flex", flexDirection: "column", alignItems: "center", marginBottom: {
                           xs: 4,
                           sm: 6,
                           md: 8,
                           lg: 10,
                       },
                   }}>
            <Avatar src={logo} variant="square" sx={{
                height: "auto", width: {
                    xs: 50,
                    sm: 75,
                    md: 100,
                    lg: 125,
                }, marginBottom: {
                    xs: 0,
                    sm: 1,
                    md: 2,
                    lg: 3,
                },
            }}/>
            <Typography variant="h2" fontWeight={700} fontFamily="inherit" sx={{
                marginBottom: {xs: 0, sm: 1,}, fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "3rem",
                    lg: "3.75rem",
                },
            }}>Get Started
                Now</Typography>
            <Typography variant="h4" fontWeight={400} align="center" fontFamily="inherit" sx={{
                marginBottom: 2, fontSize: {
                    xs: "1.25rem",
                    sm: "1.5rem",
                    md: "1.75rem",
                    lg: "2rem",
                }
            }}>
                Setup is easy and takes under 5 minutes.
            </Typography>
            <Button variant="contained"
                    sx={{
                        fontFamily: "inherit",
                        fontWeight: 500,
                        marginBottom: 1,
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
                    }}>
                Get Started Now
            </Button>
            <Stack direction="row" columnGap="2px" sx={{
                fontSize: {
                    xs: 12,
                    md: 14,
                    lg: 16,
                },
            }}>
                <Box sx={{
                    width: {
                        xs: 10,
                        md: 15,
                        lg: 20,
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                }}>
                    <img className={styles.greenDot} src={dot} alt="dot" style={{
                        alignSelf: "start",
                        width: "100%",
                    }}/>
                </Box>
                <Stack direction="row" columnGap={1} alignItems="center">
                    <Typography variant="body1" fontFamily="inherit" fontWeight={700} sx={{fontSize: "inherit",}}>
                        1000+</Typography>
                    <Typography variant="body1" fontFamily="inherit" sx={{color: "grey.600", fontSize: "inherit",}}>
                        creators have already
                        started</Typography>
                </Stack>
            </Stack>
        </Container>
    )
}

export default GetStart