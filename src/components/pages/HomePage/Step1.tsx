import React, {FC} from "react"
import MContainer from "components/Motion/MContainer"
import MTypography from "components/Motion/MTypography"
import MGreyButton from "components/Motion/MGreyButton"

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
            stiffness: 100,
        }
    }),
}

const buttonVariants = {
    hidden: {
        scale: 0,
    },
    visible: {
        scale: 1,
        transition: {
            delay: 0.6,
            type: "spring",
            stiffness: 100,
        }
    },
}

const Step1: FC = () => {
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
                             overflow: "hidden",
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
                STEP 1</MTypography>
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
                Connect Your Content</MTypography>
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
                Bring all of your content together and get a Homepage that
                automatically updates whenever you create anywhere online.</MTypography>
            <MGreyButton variant="outlined" sx={{
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
            }} variants={buttonVariants}>View Avaliable Sources</MGreyButton>
        </MContainer>
    )
}

export default Step1