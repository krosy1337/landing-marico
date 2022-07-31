import React, {FC} from "react"
import {Avatar, Card, CardContent, Chip, Container, Grid, Typography} from "@mui/material"
import twitterIcon from "assets/companies/twitter.jpg"
import youtubeIcon from "assets/companies/youtube.jpg"
import wordpressIcon from "assets/companies/wordpress.jpg"
import substackIcon from "assets/companies/substack.jpg"
import mediumIcon from "assets/companies/medium.jpg"
import spotifyIcon from "assets/companies/spotify.jpg"
import anchorIcon from "assets/companies/anchor.jpg"
import podcastIcon from "assets/companies/podcast.jpg"
import instagramIcon from "assets/companies/instagram.jpg"
import linkedinIcon from "assets/companies/linkedin.jpg"
import facebookIcon from "assets/companies/facebook.jpg"
import MGrid from "components/Motion/MGrid"

const variants = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            type: "spring",
        },
    },
}

const Companies: FC = () => {
    return (
        <Container maxWidth="lg" sx={{
            marginBottom: {
                xs: 4,
                sm: 6,
                md: 8,
                lg: 10,
            },
        }}>
            <Grid container spacing={2}>
                <MGrid item xs={12} sm={6} lg={4} initial="hidden" whileInView="visible" variants={variants}>
                    <Card variant="outlined" sx={{borderColor: "grey.700", height: "100%",}}>
                        <CardContent>
                            <Avatar sx={{mb: 2, width: 50, height: 50,}} src={twitterIcon}/>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={600}
                                        sx={{fontSize: 20, mb: 1,}}>Twitter</Typography>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={400}
                                        sx={{fontSize: 16, color: "grey.500"}}>Connect your Twitter feed to
                                your Marico homepage.</Typography>
                        </CardContent>
                    </Card>
                </MGrid>
                <MGrid item xs={12} sm={6} lg={4} initial="hidden" whileInView="visible" variants={variants}>
                    <Card variant="outlined" sx={{borderColor: "grey.700", height: "100%",}}>
                        <CardContent>
                            <Avatar sx={{mb: 2, width: 50, height: 50,}} src={youtubeIcon}/>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={600}
                                        sx={{fontSize: 20, mb: 1,}}>YouTube</Typography>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={400}
                                        sx={{fontSize: 16, color: "grey.500"}}>Connect your YouTube feed to
                                your Marico homepage.</Typography>
                        </CardContent>
                    </Card>
                </MGrid>
                <MGrid item xs={12} sm={6} lg={4} initial="hidden" whileInView="visible" variants={variants}>
                    <Card variant="outlined" sx={{borderColor: "grey.700", height: "100%",}}>
                        <CardContent>
                            <Avatar sx={{mb: 2, width: 50, height: 50,}} src={wordpressIcon}/>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={600}
                                        sx={{fontSize: 20, mb: 1,}}>WordPress</Typography>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={400}
                                        sx={{fontSize: 16, color: "grey.500"}}>Connect your WordPress feed
                                to your Marico homepage.</Typography>
                        </CardContent>
                    </Card>
                </MGrid>
                <MGrid item xs={12} sm={6} lg={4} initial="hidden" whileInView="visible" variants={variants}>
                    <Card variant="outlined" sx={{borderColor: "grey.700", height: "100%",}}>
                        <CardContent>
                            <Avatar sx={{mb: 2, width: 50, height: 50,}} src={substackIcon}/>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={600}
                                        sx={{fontSize: 20, mb: 1,}}>Substack</Typography>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={400}
                                        sx={{fontSize: 16, color: "grey.500"}}>Connect your Substack feed to
                                your Marico homepage.</Typography>
                        </CardContent>
                    </Card>
                </MGrid>
                <MGrid item xs={12} sm={6} lg={4} initial="hidden" whileInView="visible" variants={variants}>
                    <Card variant="outlined" sx={{borderColor: "grey.700", height: "100%",}}>
                        <CardContent>
                            <Avatar sx={{mb: 2, width: 50, height: 50, objectPosition: "center",}} src={mediumIcon}/>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={600}
                                        sx={{fontSize: 20, mb: 1,}}>Medium</Typography>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={400}
                                        sx={{fontSize: 16, color: "grey.500"}}>Connect your Medium feed to
                                your Marico homepage.</Typography>
                        </CardContent>
                    </Card>
                </MGrid>
                <MGrid item xs={12} sm={6} lg={4} initial="hidden" whileInView="visible" variants={variants}>
                    <Card variant="outlined" sx={{borderColor: "grey.700", position: "relative", height: "100%",}}>
                        <CardContent>
                            <Avatar sx={{mb: 2, width: 50, height: 50,}} src={wordpressIcon}/>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={600}
                                        sx={{fontSize: 20, mb: 1,}}>RSS Feeds</Typography>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={400}
                                        sx={{fontSize: 16, color: "grey.500"}}>Connect your RSS feed to
                                your Marico homepage.</Typography>
                        </CardContent>
                        <Chip label="Coming Soon" color="primary"
                              sx={{
                                  position: "absolute",
                                  right: 10,
                                  top: 10,
                                  borderRadius: 2,
                              }}/>
                    </Card>
                </MGrid>
                <MGrid item xs={12} sm={6} lg={4} initial="hidden" whileInView="visible" variants={variants}>
                    <Card variant="outlined" sx={{borderColor: "grey.700", height: "100%",}}>
                        <CardContent>
                            <Avatar sx={{mb: 2, width: 50, height: 50, objectPosition: "center",}} src={spotifyIcon}/>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={600}
                                        sx={{fontSize: 20, mb: 1,}}>Spotify</Typography>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={400}
                                        sx={{fontSize: 16, color: "grey.500"}}>Connect your Spotify feed to
                                your Marico homepage.</Typography>
                        </CardContent>
                    </Card>
                </MGrid>
                <MGrid item xs={12} sm={6} lg={4} initial="hidden" whileInView="visible" variants={variants}>
                    <Card variant="outlined" sx={{borderColor: "grey.700", height: "100%",}}>
                        <CardContent>
                            <Avatar sx={{mb: 2, width: 50, height: 50, objectPosition: "center",}} src={anchorIcon}/>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={600}
                                        sx={{fontSize: 20, mb: 1,}}>Anchor</Typography>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={400}
                                        sx={{fontSize: 16, color: "grey.500"}}>Connect your Anchor feed to
                                your Marico homepage.</Typography>
                        </CardContent>
                    </Card>
                </MGrid>
                <MGrid item xs={12} sm={6} lg={4} initial="hidden" whileInView="visible" variants={variants}>
                    <Card variant="outlined" sx={{borderColor: "grey.700", height: "100%",}}>
                        <CardContent>
                            <Avatar sx={{mb: 2, width: 50, height: 50, objectPosition: "center",}} src={podcastIcon}/>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={600}
                                        sx={{fontSize: 20, mb: 1,}}>Apple Podcasts</Typography>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={400}
                                        sx={{fontSize: 16, color: "grey.500"}}>Connect your Apple Podcast
                                to your Marico homepage.</Typography>
                        </CardContent>
                    </Card>
                </MGrid>
                <MGrid item xs={12} sm={6} lg={4} initial="hidden" whileInView="visible" variants={variants}>
                    <Card variant="outlined" sx={{borderColor: "grey.700", position: "relative", height: "100%",}}>
                        <CardContent>
                            <Avatar sx={{mb: 2, width: 50, height: 50, objectPosition: "center",}} src={instagramIcon}/>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={600}
                                        sx={{fontSize: 20, mb: 1,}}>Instagram</Typography>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={400}
                                        sx={{fontSize: 16, color: "grey.500"}}>Connect your Instagram feed
                                to your Marico homepage.</Typography>
                        </CardContent>
                        <Chip label="Coming Soon" color="primary"
                              sx={{
                                  position: "absolute",
                                  right: 10,
                                  top: 10,
                                  borderRadius: 2,
                              }}/>
                    </Card>
                </MGrid>
                <MGrid item xs={12} sm={6} lg={4} initial="hidden" whileInView="visible" variants={variants}>
                    <Card variant="outlined" sx={{borderColor: "grey.700", position: "relative", height: "100%",}}>
                        <CardContent>
                            <Avatar sx={{mb: 2, width: 50, height: 50, objectPosition: "center",}} src={linkedinIcon}/>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={600}
                                        sx={{fontSize: 20, mb: 1,}}>Linkedin</Typography>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={400}
                                        sx={{fontSize: 16, color: "grey.500"}}>Connect your Linkedin feed to
                                your Marico homepage.</Typography>
                        </CardContent>
                        <Chip label="Coming Soon" color="primary"
                              sx={{
                                  position: "absolute",
                                  right: 10,
                                  top: 10,
                                  borderRadius: 2,
                              }}/>
                    </Card>
                </MGrid>
                <MGrid item xs={12} sm={6} lg={4} initial="hidden" whileInView="visible" variants={variants}>
                    <Card variant="outlined" sx={{borderColor: "grey.700", position: "relative", height: "100%",}}>
                        <CardContent>
                            <Avatar sx={{mb: 2, width: 50, height: 50, objectPosition: "center",}} src={facebookIcon}/>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={600}
                                        sx={{fontSize: 20, mb: 1,}}>Fackbook</Typography>
                            <Typography variant="body1" fontFamily="inherit" fontWeight={400}
                                        sx={{fontSize: 16, color: "grey.500"}}>Connect your Fecebook feed to
                                your Marico homepage.</Typography>
                        </CardContent>
                        <Chip label="Coming Soon" color="primary"
                              sx={{
                                  position: "absolute",
                                  right: 10,
                                  top: 10,
                                  borderRadius: 2,
                              }}/>
                    </Card>
                </MGrid>
            </Grid>
        </Container>
    )
}

export default Companies