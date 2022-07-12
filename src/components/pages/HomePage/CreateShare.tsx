import React, {FC} from "react"
import {Box, Button, List, ListItem, Stack, Typography} from "@mui/material"
import image from "assets/desktop_create_share.jpg"
import GreyButton from "components/UI/GreyButton"

const CreateShare: FC = () => {
    return (
        <Box sx={{display: "flex", alignItems: "flex-start", marginBottom: 15,}}>
            <Box sx={{marginLeft: "auto", marginRight: 20,}}>
                <Typography variant="h6" fontFamily="inherit" fontWeight={500} sx={{marginBottom: 5}}>
                    Create & Share</Typography>
                <Typography variant="h3" fontFamily="inherit" fontWeight={600} sx={{marginBottom: 1,}}>
                    Reach Your</Typography>
                <Box sx={{marginBottom: 2,}}>
                    <Typography variant="h3" fontFamily="inherit" fontWeight={600} component="span"
                                sx={{marginRight: 1,}}>Audience</Typography>
                    <Typography variant="h3" fontFamily="inherit" fontWeight={600} color="primary" component="span">
                        Directly.</Typography>
                </Box>
                <List sx={{padding: 0, marginBottom: 4, display: "flex", flexDirection: "column", rowGap: 1,}}>
                    <ListItem sx={{padding: 0}}>
                        <Box sx={{display: "flex", alignItems: "center", columnGap: 1}}>
                            <Box sx={{
                                width: 26,
                                height: 26,
                                backgroundColor: "grey.800",
                                borderRadius: 50,
                                textAlign: "center",
                                lineHeight: "26px"
                            }}>
                                1
                            </Box>
                            <Typography variant="body1" fontFamily="inherit">
                                Embed content or create something new to share.</Typography>
                        </Box>
                    </ListItem>
                    <ListItem sx={{padding: 0}}>
                        <Box sx={{display: "flex", alignItems: "center", columnGap: 1}}>
                            <Box sx={{
                                width: 26,
                                height: 26,
                                backgroundColor: "grey.800",
                                borderRadius: 50,
                                textAlign: "center",
                                lineHeight: "26px"
                            }}>
                                2
                            </Box>
                            <Typography variant="body1" fontFamily="inherit">
                                Share content over email, text message or your homepage.</Typography>
                        </Box>
                    </ListItem>
                </List>
                <Stack direction="row" columnGap={2}>
                    <Button variant="contained"
                            sx={{height: 40, width: 150, fontFamily: "inherit", fontSize: 12, fontWeight: 500,}}>
                        Get Started Now
                    </Button>
                    <GreyButton variant="outlined" sx={{
                        height: 40, width: 150, fontFamily: "inherit", fontWeight: 500, fontSize: 12,
                    }}>View A Demo</GreyButton>
                </Stack>
            </Box>
            <Box sx={{position: "relative"}}>
                <Box sx={{
                    height: 320, width: 444, zIndex: 1, position: "relative",
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
        </Box>
    )
}

export default CreateShare