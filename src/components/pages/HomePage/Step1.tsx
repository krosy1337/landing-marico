import React, {FC} from "react"
import {Container, Typography} from "@mui/material"
import GreyButton from "components/UI/GreyButton"

const Step1: FC = () => {
    return (
        <Container maxWidth="md" sx={{
            display: "flex", flexDirection: "column", alignItems: "center", marginBottom: {
                xs: 4,
                sm: 6,
                md: 8,
                lg: 10,
            },
        }}>
            <Typography variant="h6" color="primary" fontFamily="inherit" fontWeight={500} align="center"
                        sx={{
                            marginBottom: {
                                xs: 0.5,
                                md: 2,
                            },
                            fontSize: {
                                xs: "1rem",
                                sm: "1.05rem",
                                md: "1.15rem",
                                lg: "1.25rem",
                            },
                        }}>
                STEP 1</Typography>
            <Typography variant="h3" fontFamily="inherit" fontWeight={600} align="center" sx={{
                marginBottom: {
                    xs: 0.5,
                    md: 2,
                },
                fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "2.5rem",
                    lg: "3rem",
                },
            }}>
                Connect Your Content</Typography>
            <Typography variant="h6" component="p" fontFamily="inherit" fontWeight={400} align="center"
                        sx={{
                            color: "grey.600",
                            marginBottom: {
                                xs: 0.5,
                                md: 2,
                            },
                            fontSize: {
                                xs: "0.9rem",
                                sm: "1rem",
                                md: "1.10rem",
                                lg: "1.25rem",
                            },
                        }}>
                Bring all of your content together and get a Homepage that
                automatically updates whenever you create anywhere online.</Typography>
            <GreyButton variant="outlined" sx={{
                fontFamily: "inherit", fontWeight: 400,
                width: {
                    xs: "100%",
                    sm: 200,
                    md: 225,
                    lg: 250,
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
            }}>View Avaliable Sources</GreyButton>
        </Container>
    )
}

export default Step1