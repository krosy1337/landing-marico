import React, {FC} from "react"
import {Container, Typography} from "@mui/material"

const Step3: FC = () => {
    return (
        <>
            <Container maxWidth="lg"
                       sx={{
                           display: "flex", flexDirection: "column", alignItems: "center",
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
                    STEP 3</Typography>
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
                    Send Emails & Text Messages</Typography>
            </Container>
            <Container maxWidth="md"
                       sx={{
                           display: "flex", flexDirection: "column", alignItems: "center", marginBottom: {
                               xs: 4,
                               sm: 6,
                               md: 8,
                               lg: 10,
                           },
                       }}>
                <Typography variant="h6" component="p" fontFamily="inherit" fontWeight={400} align="center"
                            sx={{
                                color: "grey.600", marginBottom: {
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
                    No more going through a social platform. Reach and engage
                    your audience directly over email and text massage.
                </Typography>
            </Container>
        </>
    )
}

export default Step3