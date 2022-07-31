import React, {FC} from "react"
import {Box} from "@mui/material"
import Plans from "components/pages/PricingPage/Plans"
import GetStart from "components/pages/HomePage/GetStart"

const PricingPage: FC = () => {
    return (
        <Box sx={{fontFamily: "Poppins", paddingTop: {xs: 4, sm: 5, md: 10, lg: 15,},}}>
            <Plans/>
            <GetStart/>
        </Box>
    )
}

export default PricingPage