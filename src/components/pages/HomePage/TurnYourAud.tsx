import React, {FC} from "react"
import {Container, Stack} from "@mui/material"
import dot from "assets/green_dot.svg"
import styles from "styles/home.module.scss"
import MTypography from "components/Motion/MTypography"
import MButton from "components/Motion/MButton"
import MGreyButton from "components/Motion/MGreyButton"
import MBox from "components/Motion/MBox"
import {useNavigate} from "react-router-dom"
import {RouteNames} from "routes"

const typographyVariants = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: (custom: number) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.2 + custom,
            type: "spring",
            stiffness: 100,
        },
    }),
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

const buttonVariants = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: (custom: number) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.2 + custom,
            type: "spring",
            stiffness: 100,
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

const TurnYourAud: FC = () => {
    const navigator = useNavigate()

    const onClick = () => {
        navigator(RouteNames.PRICING)
    }
    return (
        <Container maxWidth="md" sx={{
            marginTop: {
                xs: 5,
                md: 10,
                lg: 15,
            },
            marginBottom: {
                xs: 5,
                md: 10,
                lg: 18,
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <MTypography variant="h4" align="center" fontFamily="inherit" fontWeight={500} sx={{
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
            }}
                         initial="hidden" whileInView="visible" variants={typographyVariants}>Turn
                your audience into email
                and
                text message subscribers.</MTypography>
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
                <MButton variant="contained"
                         onClick={onClick}
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
                         initial="hidden" whileInView="visible" variants={buttonVariants} custom={0.2}>Get Started
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
                }}
                             initial="hidden" whileInView="visible" variants={buttonVariants} custom={0.3}>View A
                    Demo</MGreyButton>
            </Stack>
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
                                 initial="hidden" whileInView="visible" custom={0.4} variants={typographyVariants}>
                        creators have already
                        started</MTypography>
                </Stack>
            </Stack>
        </Container>
    )
}

export default TurnYourAud