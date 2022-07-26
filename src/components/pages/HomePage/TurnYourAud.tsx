import React, {FC} from "react"
import {Box, Button, Container, Stack, Typography} from "@mui/material"
import dot from "assets/green_dot.svg"
import GreyButton from "components/UI/GreyButton"
import styles from "styles/home.module.scss"

const TurnYourAud: FC = () => {
    return (
        <Container maxWidth="md" sx={{
            marginTop: {
                xs: 5,
                md: 10,
                lg: 15,
            },
            marginBottom: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Typography variant="h4" align="center" fontFamily="inherit" fontWeight={500} sx={{
                marginBottom: {
                    xs: 2,
                    lg: 4,
                },
                fontSize: {
                    xs: "1rem",
                    sm: "1.25rem",
                    md: "1.5rem",
                    lg: "2.5rem",
                }
            }}>Turn
                your audience into email
                and
                text message subscribers.</Typography>
            <Stack alignItems="center" justifyContent="center" rowGap={1} columnGap={2} sx={{
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

export default TurnYourAud