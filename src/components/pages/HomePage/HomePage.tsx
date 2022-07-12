import React, {FC} from "react"
import MainHeading from "./MainHeading"
import {Box} from "@mui/material"
import TurnYourAud from "./TurnYourAud"

const HomePage: FC = () => {
    return (
        <Box sx={{fontFamily: "Poppins", paddingTop: 15,}}>
            <MainHeading/>
            <TurnYourAud/>
        </Box>
    )
}

export default HomePage