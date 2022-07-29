import React, {FC} from "react"
import image from "assets/twitts.jpg"
import MContainer from "components/Motion/MContainer"
import MTypography from "components/Motion/MTypography"
import MBox from "components/Motion/MBox"

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

const imageVariants = {
    hidden: {
        scale: 0,
    },
    visible: {
        scale: 1,
        transition: {
            type: "spring",
        },
    },
}

const ExpertsAgree: FC = () => {
    return (
        <MContainer maxWidth="lg" sx={{
            marginBottom: {
                xs: 4,
                sm: 6,
                md: 8,
                lg: 10,
            },
        }} initial="hidden" whileInView="visible">
            <MTypography variant="h2" align="center" fontFamily="inherit" fontWeight={600} sx={{
                marginBottom: {
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 5,
                },
                fontSize: {
                    xs: "2rem",
                    sm: "3rem",
                    md: "3.5rem",
                    lg: "3.75rem",
                }
            }} variants={typographyVariants}>
                Experts Agree</MTypography>
            <MBox sx={{
                height: 280,
                position: "relative",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: {
                    xs: "cover",
                    md: "contain",
                },
                opacity: 0.45,
            }} variants={imageVariants}>
            </MBox>
        </MContainer>
    )
}

export default ExpertsAgree