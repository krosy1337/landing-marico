import React, {FC} from "react"
import image from "assets/audience_bg.jpg"
import MBox from "components/Motion/MBox"
import MTypography from "components/Motion/MTypography"

const imageVariants = {
    hidden: {
        scale: 0,
    },
    visible: (custom: number) => ({
        scale: 1,
        transition: {
            delay: 0.2 * custom,
            type: "spring",
        }
    }),
}
const typographyVariants = {
    hidden: {
        scale: 0,
        translateX: "-50%",
        translateY: "-50%",
    },
    visible: (custom: number) => ({
        scale: 1,
        translateX: "-50%",
        translateY: "-50%",
        transition: {
            delay: 0.2 * custom,
            type: "spring",
        }
    }),
}

const Audience: FC = () => {
    return (
        <MBox sx={{
            position: "relative",
            height: {
                xs: 100,
                sm: 200,
                md: 300,
                lg: 400,
            },
            backgroundImage: `url(${image})`,
            backgroundRepeat: "repeat",
            backgroundSize: "50%",
            marginBottom: {
                xs: 4,
                sm: 6,
                md: 8,
                lg: 10,
            },
        }} initial="hidden" whileInView="visible" variants={imageVariants} custom={0}>
            <MTypography variant="h3" fontFamily="inherit" fontWeight={600} align="center"
                         sx={{
                             position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                             fontSize: {
                                 xs: "1rem",
                                 sm: "1.5rem",
                                 md: "2.25rem",
                                 lg: "3rem",
                             },
                             width: {
                                 xs: "100%",
                                 sm: "75%",
                                 lg: "55%",
                             }
                         }} variants={typographyVariants} custom={1}>
                We've helped over 1,000 creatorsre
                claim control of their audience.
            </MTypography>
        </MBox>
    )
}

export default Audience