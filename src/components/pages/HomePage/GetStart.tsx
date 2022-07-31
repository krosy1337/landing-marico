import React, {FC} from "react"
import {Container, Stack} from "@mui/material"
import logo from "assets/logo.svg"
import dot from "assets/green_dot.svg"
import styles from "styles/home.module.scss"
import MAvatar from "components/Motion/MAvatar"
import MTypography from "components/Motion/MTypography"
import MButton from "components/Motion/MButton"
import MBox from "components/Motion/MBox"
import {useNavigate} from "react-router-dom"
import {RouteNames} from "routes"

const logoVariants = {
    hidden: {
        scale: 0,
    },
    visible: {
        scale: 1,
        transition: {
            type: "spring"
        },
    },
}

const typographyVariants = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2 * custom,
            type: "spring"
        },
    }),
}

const buttonVariants = {
    hidden: {
        scale: 0,
    },
    visible: (custom: number) => ({
        scale: 1,
        transition: {
            delay: 0.2 * custom,
            type: "spring"
        },
    }),
}

const whiteTextVariants = {
    hidden: {y: 10, opacity: 0,},
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.6,
            type: "spring",
            stiffness: 100,
        },
    },
}

const greenDotVariants = {
    hidden: {y: -10, opacity: 0,},
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.6,
            type: "spring",
            stiffness: 100,
        }
    },
}

const greyTextVariants = {
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

const GetStart: FC = () => {
    const navigator = useNavigate()

    const onClick = () => {
        navigator(RouteNames.PRICING)
    }
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
            <MAvatar src={logo} variant="square" sx={{
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
            }} initial="hidden" whileInView="visible" variants={logoVariants}/>
            <MTypography variant="h2" fontWeight={700} fontFamily="inherit" sx={{
                marginBottom: {xs: 0, sm: 1,}, fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "3rem",
                    lg: "3.75rem",
                },
            }} initial="hidden" whileInView="visible" variants={typographyVariants} custom={1}>Get Started
                Now</MTypography>
            <MTypography variant="h4" fontWeight={400} align="center" fontFamily="inherit" sx={{
                marginBottom: 2, fontSize: {
                    xs: "1.25rem",
                    sm: "1.5rem",
                    md: "1.75rem",
                    lg: "2rem",
                }
            }} initial="hidden" whileInView="visible" variants={typographyVariants} custom={2}>
                Setup is easy and takes under 5 minutes.
            </MTypography>
            <MButton variant="contained"
                     onClick={onClick}
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
                     }} initial="hidden" whileInView="visible" variants={buttonVariants} custom={3}>
                Get Started Now
            </MButton>
            <Stack direction="row" columnGap="2px" sx={{
                fontSize: {
                    xs: 12,
                    md: 14,
                    lg: 16,
                },
            }}>
                <MBox sx={{
                    width: {
                        xs: 10,
                        md: 15,
                        lg: 20,
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                }} initial="hidden" whileInView="visible" variants={greenDotVariants}>
                    <img className={styles.greenDot} src={dot} alt="dot" style={{
                        alignSelf: "start",
                        width: "100%",
                    }}/>
                </MBox>
                <Stack direction="row" columnGap={1} alignItems="center">
                    <MTypography variant="body1" fontFamily="inherit" fontWeight={700} sx={{fontSize: "inherit",}}
                                 initial="hidden" whileInView="visible" variants={whiteTextVariants}>
                        1000+</MTypography>
                    <MTypography variant="body1" fontFamily="inherit" sx={{color: "grey.600", fontSize: "inherit",}}
                                 initial="hidden" whileInView="visible" variants={greyTextVariants} custom={4}>
                        creators have already
                        started</MTypography>
                </Stack>
            </Stack>
        </Container>
    )
}

export default GetStart