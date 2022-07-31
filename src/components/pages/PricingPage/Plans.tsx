import React, {FC} from "react"
import {Box, Button, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"
import MContainer from "components/Motion/MContainer"
import MTypography from "components/Motion/MTypography"
import MCard from "components/Motion/MCard"

const typographyVariants = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
        },
    },
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2 * custom,
            type: "spring",
        },
    }),
}

const Plans: FC = () => {
    return (
        <MContainer maxWidth="lg" sx={{
            marginBottom: {
                xs: 4,
                sm: 6,
                md: 8,
                lg: 10,
            },
        }} initial="hidden" whileInView="visible">
            <MTypography variant="h2" fontFamily="inherit" fontWeight={700} align="center" sx={{
                fontSize: {
                    xs: "1.5rem",
                    sm: "2.75rem",
                    md: "3rem",
                    lg: "3.75rem",
                },
                mb: {
                    xs: 2,
                    sm: 4,
                    md: 6,
                    lg: 8,
                },
            }} variants={typographyVariants}>Choose the plan that's right for
                you.</MTypography>
            <Box sx={{
                display: "flex", justifyContent: {
                    xs: "center",
                    lg: "space-between",
                }, flexWrap: {
                    xs: "wrap",
                    lg: "no-wrap",
                },
                rowGap: {
                    xs: 1,
                    sm: 3,
                    md: 5,
                },
                mx: {
                    xs: -2,
                    lg: -5,
                },
            }}>
                <MCard variant="outlined"
                       sx={{
                           borderRadius: 3,
                           borderColor: "grey.700",
                           flexBasis: "33.333%",
                           maxWidth: 328,
                           minWidth: 290,
                           mx: {
                               xs: 2,
                               lg: 5,
                           },
                       }} initial="hidden" whileInView="visible" variants={cardVariants}>
                    <CardContent sx={{display: "flex", flexDirection: "column", height: "100%",}}>
                        <Typography variant="h5" fontFamily="inherit" fontWeight={600}
                                    sx={{fontSize: 24}}>Starter</Typography>
                        <Typography variant="h6" fontFamily="inherit" fontWeight={400}
                                    sx={{fontSize: 16, color: "grey.500", mb: 2,}}>Perfect for
                            tying out
                            Wavium</Typography>
                        <Typography variant="h4" fontFamily="inherit" fontWeight={600} sx={{mb: "auto",}}
                        >Free</Typography>
                        <Typography variant="h4" fontFamily="inherit" fontWeight={600}
                                    sx={{mb: 1, mt: "auto", fontSize: 16}}>Collect
                            Unlimited
                            subscribers</Typography>
                        <Typography variant="h4" fontFamily="inherit" fontWeight={400} sx={{mb: 2, fontSize: 16}}>500
                            monthly emails</Typography>

                        <Typography variant="h6" fontFamily="inherit" fontWeight={400}
                                    sx={{fontSize: 14, color: "grey.500", mb: 2,}}>Upgrade to send more
                            emails</Typography>
                        <Typography variant="h4" fontFamily="inherit" fontWeight={600} sx={{mb: 1, fontSize: 16}}>Key
                            features</Typography>
                        <List sx={{py: 0, mb: 3,}}>
                            <ListItem sx={{px: 0,}}>
                                <ListItemIcon sx={{color: "white", minWidth: 0, mr: 1,}}>
                                    <CheckIcon color="inherit"/>
                                </ListItemIcon>
                                <ListItemText sx={{fontSize: 14}}>
                                    Automatic updating home page
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{px: 0,}}>
                                <ListItemIcon sx={{color: "white", minWidth: 0, mr: 1,}}>
                                    <CheckIcon color="inherit"/>
                                </ListItemIcon>
                                <ListItemText sx={{fontSize: 14}}>
                                    Unlimited sources + posts
                                </ListItemText>
                            </ListItem>
                        </List>
                        <Button variant="outlined" color="inherit" fullWidth
                                sx={{height: 50, borderRadius: 3, borderColor: "primary.main"}}>Start
                            For Free</Button>
                    </CardContent>
                </MCard>
                <MCard variant="outlined"
                       sx={{
                           borderRadius: 3,
                           borderColor: "grey.700",
                           flexBasis: "33.333%",
                           maxWidth: 328,
                           minWidth: 290,
                           mx: {
                               xs: 2,
                               lg: 5,
                           },
                       }} initial="hidden" whileInView="visible" variants={cardVariants}>
                    <CardContent sx={{display: "flex", flexDirection: "column", height: "100%",}}>
                        <Typography variant="h5" fontFamily="inherit" fontWeight={600}
                                    sx={{fontSize: 24}}>Basic</Typography>
                        <Typography variant="h6" fontFamily="inherit" fontWeight={400}
                                    sx={{fontSize: 16, color: "grey.500", mb: 2,}}>Build your online home</Typography>
                        <Box sx={{display: "flex", alignItems: "end", mb: 1,}}>
                            <Typography variant="h4" fontFamily="inherit" fontWeight={600}>$14</Typography>
                            <Typography variant="h4" fontFamily="inherit" fontWeight={400}
                                        sx={{fontSize: 14, color: "grey.500"}}>Per month</Typography>
                        </Box>
                        <Typography variant="h4" fontFamily="inherit" fontWeight={400}
                                    sx={{fontSize: 14, color: "grey.500", textDecoration: "underline", mb: 4,}}>or
                            $19/mo,
                            billed monthly</Typography>
                        <Typography variant="h4" fontFamily="inherit" fontWeight={600} sx={{mb: 1, fontSize: 16}}>Collect
                            Unlimited
                            subscribers</Typography>
                        <Typography variant="h4" fontFamily="inherit" fontWeight={400} sx={{mb: 2, fontSize: 16}}>2,000
                            free monthl emails</Typography>
                        <Typography variant="h6" fontFamily="inherit" fontWeight={400}
                                    sx={{fontSize: 14, color: "grey.500", mb: 2,}}>Purchase more for $0.002 per
                            email</Typography>
                        <Typography variant="h4" fontFamily="inherit" fontWeight={600} sx={{mb: 1, fontSize: 16}}>Everything
                            in starter, plus</Typography>
                        <List sx={{py: 0, mb: 3,}}>
                            <ListItem sx={{px: 0,}}>
                                <ListItemIcon sx={{color: "white", minWidth: 0, mr: 1,}}>
                                    <CheckIcon color="inherit"/>
                                </ListItemIcon>
                                <ListItemText sx={{fontSize: 14}}>
                                    Remove Wavium branding
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{px: 0,}}>
                                <ListItemIcon sx={{color: "white", minWidth: 0, mr: 1,}}>
                                    <CheckIcon color="inherit"/>
                                </ListItemIcon>
                                <ListItemText sx={{fontSize: 14}}>
                                    Embed Wavium on your own
                                    domain
                                </ListItemText>
                            </ListItem>
                        </List>
                        <Button variant="outlined" color="inherit" fullWidth
                                sx={{height: 50, borderRadius: 3, borderColor: "primary.main"}}>Start
                            Free 14-day Trial</Button>
                    </CardContent>
                </MCard>
                <MCard variant="outlined"
                       sx={{
                           borderRadius: 3,
                           bgcolor: "primary.main",
                           borderColor: "grey.700",
                           flexBasis: "33.333%",
                           maxWidth: 328,
                           minWidth: 290,
                           mx: {
                               xs: 2,
                               lg: 5,
                           },
                       }} initial="hidden" whileInView="visible" variants={cardVariants}>
                    <CardContent sx={{display: "flex", flexDirection: "column", height: "100%",}}>
                        <Typography variant="h5" fontFamily="inherit" fontWeight={600}
                                    sx={{fontSize: 24}}>Complete</Typography>
                        <Typography variant="h6" fontFamily="inherit" fontWeight={400}
                                    sx={{fontSize: 16, mb: 2,}}>Enhanced engagement</Typography>
                        <Box sx={{display: "flex", alignItems: "end", mb: 1,}}>
                            <Typography variant="h4" fontFamily="inherit" fontWeight={600}>$29</Typography>
                            <Typography variant="h4" fontFamily="inherit" fontWeight={400}
                                        sx={{fontSize: 14,}}>Per month</Typography>
                        </Box>
                        <Typography variant="h4" fontFamily="inherit" fontWeight={400}
                                    sx={{fontSize: 14, textDecoration: "underline", mb: 3,}}>or
                            $34/mo,
                            billed monthly</Typography>
                        <Typography variant="h4" fontFamily="inherit" fontWeight={600}
                                    sx={{mt: "auto", mb: 1, fontSize: 16}}>Collect
                            Unlimited
                            subscribers</Typography>
                        <Typography variant="h4" fontFamily="inherit" fontWeight={400} sx={{mb: 2, fontSize: 16}}>10,000
                            free monthly emails</Typography>
                        <Typography variant="h6" fontFamily="inherit" fontWeight={400}
                                    sx={{fontSize: 14, mb: 2,}}>Purchase more for $0.002 per
                            email</Typography>
                        <Typography variant="h4" fontFamily="inherit" fontWeight={600} sx={{mb: 1, fontSize: 16}}>Everything
                            in basic, plus </Typography>
                        <List sx={{py: 0, mb: 3,}}>
                            <ListItem sx={{px: 0,}}>
                                <ListItemIcon sx={{color: "white", minWidth: 0, mr: 1,}}>
                                    <CheckIcon color="inherit"/>
                                </ListItemIcon>
                                <ListItemText sx={{fontSize: 14}}>
                                    Collect text massage subscribers
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{px: 0,}}>
                                <ListItemIcon sx={{color: "white", minWidth: 0, mr: 1,}}>
                                    <CheckIcon color="inherit"/>
                                </ListItemIcon>
                                <ListItemText sx={{fontSize: 14}}>
                                    Share posts over text massage
                                </ListItemText>
                            </ListItem>
                        </List>
                        <Button variant="contained" color="inherit" fullWidth
                                sx={{height: 50, borderRadius: 3, color: "primary.main", fontWeight: 600,}}>Start
                            Free 14-day Trial</Button>
                    </CardContent>
                </MCard>
            </Box>
        </MContainer>
    )
}

export default Plans