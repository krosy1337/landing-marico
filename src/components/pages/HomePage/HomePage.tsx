import React, {FC} from "react"
import MainHeading from "./MainHeading"
import {Box} from "@mui/material"

const HomePage: FC = () => {
    return (
        <Box sx={{fontFamily: "Poppins", paddingTop: 15,}}>
            <MainHeading/>
        </Box>
    )
}

export default HomePage