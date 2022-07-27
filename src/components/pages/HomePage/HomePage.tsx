import React, {FC} from "react"
import MainHeading from "./MainHeading"
import {Box} from "@mui/material"
import TurnYourAud from "./TurnYourAud"
import WhyLoveMarico from "./WhyLoveMarico"
import Step1 from "./Step1"
import YourHomePage from "./YourHomePage"
import Step2 from "./Step2"
import OneClickCollects from "./OneClickCollects"
import Step3 from "./Step3"
import CreateShare from "components/pages/HomePage/CreateShare"
import ExpertsAgree from "components/pages/HomePage/ExpertsAgree"
import Audience from "components/pages/HomePage/Audience"
import GetStart from "components/pages/HomePage/GetStart"

const HomePage: FC = () => {
    return (
        <Box sx={{fontFamily: "Poppins", paddingTop: {xs: 4, sm: 5, md: 10, lg: 15,},}}>
            <MainHeading/>
            <TurnYourAud/>
            <WhyLoveMarico/>
            <Step1/>
            <YourHomePage/>
            <Step2/>
            <OneClickCollects/>
            <Step3/>
            <CreateShare/>
            <ExpertsAgree/>
            <Audience/>
            <GetStart/>
        </Box>
    )
}

export default HomePage