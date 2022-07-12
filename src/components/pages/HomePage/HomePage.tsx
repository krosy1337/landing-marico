import React, {FC} from "react"
import MainHeading from "./MainHeading"
import {Box} from "@mui/material"
import TurnYourAud from "./TurnYourAud"
import WhyLoveMarico from "./WhyLoveMarico"
import Step1 from "./Step1"

const HomePage: FC = () => {
    return (
        <Box sx={{fontFamily: "Poppins", paddingTop: 15,}}>
            <MainHeading/>
            <TurnYourAud/>
            <WhyLoveMarico/>
            <Step1/>
        </Box>
    )
}

export default HomePage