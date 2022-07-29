import React, {FC} from "react"
import MTypography from "components/Motion/MTypography"
import MContainer from "components/Motion/MContainer"

const typographyVariants = {
    hidden: {
        opacity: 0,
        x: 200,
    },
    visible: (custom: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.2 * custom,
            type: "spring",
        }
    }),
}

const Step2: FC = () => {
    return (
        <MContainer maxWidth="md" sx={{
            display: "flex", flexDirection: "column", alignItems: "center", marginBottom: {
                xs: 4,
                sm: 6,
                md: 8,
                lg: 10,
            },
        }} initial="hidden" whileInView="visible">
            <MTypography variant="h6" color="primary" fontFamily="inherit" fontWeight={500} align="center"
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
                         }} variants={typographyVariants} custom={0}>
                STEP 2</MTypography>
            <MTypography variant="h3" fontFamily="inherit" fontWeight={600} align="center" sx={{
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
            }} variants={typographyVariants} custom={1}>
                Share Your Homepage</MTypography>
            <MTypography variant="h6" fontFamily="inherit" fontWeight={400} align="center"
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
                         }} variants={typographyVariants} custom={2}>
                Share your Wavium homepage link with your followers, and
                we'll handle the rest.</MTypography>
        </MContainer>
    )
}

export default Step2