import React, {FC, useState} from "react"
import {Alert, Box, Snackbar, Typography} from "@mui/material"
import GreyInput from "components/UI/GreyInput"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined"
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded"
import GoogleIcon from "@mui/icons-material/Google"
import AppleIcon from "@mui/icons-material/Apple"
import {NavLink, useNavigate} from "react-router-dom"
import {RouteNames} from "routes"
import {SubmitHandler, useForm} from "react-hook-form"
import MContainer from "components/Motion/MContainer"
import MTypography from "components/Motion/MTypography"
import MStack from "components/Motion/MStack"
import MBox from "components/Motion/MBox"
import MButton from "components/Motion/MButton"

interface LoginFields {
    username: string
    password: string
}

const typographyVariants = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.2,
            type: "spring",
        },
    })
}
const buttonVariants = {
    hidden: {
        scale: 0,
    },
    visible: (custom: number) => ({
        scale: 1,
        transition: {
            delay: custom * 0.2,
            type: "spring",
        },
    })
}

const LogInPage: FC = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<LoginFields>()
    const [username, setUsername] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const navigator = useNavigate()

    const onSubmit: SubmitHandler<LoginFields> = (data) => {
        setUsername(data.username)
        setPassword(data.password)
        reset()
    }

    const onClose = () => {
        setUsername(null)
        setPassword(null)
        navigator(RouteNames.ROOT)
    }

    return (
        <>
            <MContainer maxWidth="lg" sx={{
                py: {
                    xs: 4,
                    sm: 6,
                    md: 8,
                    lg: 10,
                },
            }} initial="hidden" whileInView="visible">
                <MTypography variant="h2" fontFamily="inherit" fontWeight={600} align="center" sx={{
                    fontSize: {
                        xs: "2rem",
                        sm: "2.5rem",
                        md: "3rem",
                    }
                }} variants={typographyVariants} custom={0}>Log in</MTypography>
                <MTypography variant="h6" fontFamily="inherit" fontWeight={400} align="center" sx={{
                    fontSize: {
                        xs: "1rem",
                        sm: "1.5rem",
                        md: "2rem",
                    },
                    mb: {
                        xs: 2,
                        sm: 4,
                        md: 6,
                    }
                }}
                             variants={typographyVariants} custom={1}>Login into existing account.</MTypography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <MStack rowGap={4} sx={{
                        mb: {
                            xs: 2,
                            sm: 4,
                            md: 6,
                        },
                        flexDirection: {
                            xs: "column",
                            sm: "row",
                        },
                        justifyContent: {
                            xs: "start",
                            sm: "space-between",
                        },
                        mx: {
                            xs: 0,
                            sm: -5,
                        }
                    }} initial="hidden" whileInView="visible">
                        <MBox sx={{
                            position: "relative", flexBasis: "50%", maxWidth: {xs: "100%", sm: 400}, mx: {
                                xs: 0,
                                sm: 5,
                            }
                        }} variants={typographyVariants} custom={2}>
                            <GreyInput placeholder="Username" variant="standard" fullWidth {...register("username", {
                                required: {
                                    value: true,
                                    message: "Username is required field",
                                },
                            })} error={!!errors.username} helperText={errors.username?.message}/>
                            <PersonOutlinedIcon
                                sx={{position: "absolute", top: 5, right: 0}}/>
                        </MBox>
                        <MBox sx={{
                            position: "relative", flexBasis: "50%", maxWidth: {xs: "100%", sm: 400}, mx: {
                                xs: 0,
                                sm: 5,
                            }
                        }} variants={typographyVariants} custom={3}>
                            <GreyInput type="password" placeholder="Password" variant="standard" fullWidth
                                       {...register("password", {
                                           required: {
                                               value: true,
                                               message: "Password is required field",
                                           },
                                           minLength: {
                                               value: 8,
                                               message: "Password must be longer than 7 characters",
                                           },
                                       })} error={!!errors.password} helperText={errors.password?.message}/>
                            <RemoveRedEyeOutlinedIcon
                                sx={{position: "absolute", top: 5, right: 0}}/>
                        </MBox>
                    </MStack>
                    <MButton type="submit" variant="contained" sx={{
                        mx: "auto",
                        display: "block",
                        width: {
                            xs: "100%",
                            sm: 250,
                            md: 300,
                        },
                        height: {
                            xs: 36,
                            sm: 46,
                            md: 50,
                        },
                        marginBottom: {
                            xs: 2,
                            sm: 4,
                            md: 6,
                        },
                        fontSize: {
                            xs: 14,
                            sm: 16,
                            md: 18,
                        }
                    }} initial="hidden" whileInView="visible" variants={buttonVariants} custom={4}>Log In</MButton>
                </Box>
                <MTypography variant="h4" fontFamily="inherit" align="center" sx={{
                    fontSize: {
                        xs: "1.5rem",
                        sm: "2rem",
                        md: "2.5rem",
                    },
                    mb: {
                        xs: 0,
                        sm: 1,
                    }
                }} initial="hidden" whileInView="visible" variants={typographyVariants} custom={0}>Or</MTypography>
                <MTypography variant="h4" fontFamily="inherit" align="center" sx={{
                    fontSize: {
                        xs: "1rem",
                        sm: "1.5rem",
                    },
                    mb: {
                        xs: 2,
                        sm: 4,
                        md: 6,
                    }
                }} initial="hidden" whileInView="visible" variants={typographyVariants} custom={0.2}>Log in
                    with...</MTypography>
                <MStack rowGap={2} columnGap={2} flexWrap="wrap" sx={{
                    mb: {
                        xs: 2,
                        sm: 4,
                        md: 6,
                    },
                    flexDirection: {
                        xs: "column",
                        sm: "row",
                    },
                    justifyContent: {
                        xs: "start",
                        sm: "space-between",
                    },
                }} initial="hidden" whileInView="visible">
                    <MButton variant="outlined" color="inherit" startIcon={<FacebookRoundedIcon/>} sx={{flexGrow: 1,}}
                             variants={typographyVariants} custom={0}>
                        Log in with Facebook
                    </MButton>
                    <MButton variant="outlined" color="inherit" startIcon={<GoogleIcon/>} sx={{flexGrow: 1,}}
                             variants={typographyVariants} custom={0.2}>
                        Log in with Google
                    </MButton>
                    <MButton variant="outlined" color="inherit" startIcon={<AppleIcon/>} sx={{flexGrow: 1,}}
                             variants={typographyVariants} custom={0.4}>
                        Log in with Apple
                    </MButton>
                </MStack>
                <MBox sx={{
                    fontSize: {
                        xs: 14,
                        sm: 16,
                        md: 18,
                    }
                }} initial="hidden" whileInView="visible" variants={typographyVariants} custom={1}>
                    <NavLink to={RouteNames.SIGN_UP}
                             style={{
                                 color: "inherit",
                                 textAlign: "center",
                                 textDecoration: "none",
                                 display: "block",
                                 fontSize: "inherit"
                             }}>
                        Don’t have an account? Create One.
                    </NavLink>
                </MBox>
            </MContainer>
            <Snackbar open={!!username && !!password}
                      autoHideDuration={3000}
                      onClose={onClose}
                      anchorOrigin={{
                          vertical: "top",
                          horizontal: "center",
                      }}>
                <Alert onClose={onClose} severity="success">
                    <Typography>Welcome {username}</Typography>
                </Alert>
            </Snackbar>
        </>
    )
}

export default LogInPage