import React, {FC} from "react"
import {Box} from "@mui/material"
import HeadingText from "components/pages/BlogPage/HeadingText"
import Companies from "components/pages/BlogPage/Companies"
import Audience from "components/pages/HomePage/Audience"
import GetStart from "components/pages/HomePage/GetStart"

const BlogPage: FC = () => {
    return (
        <Box sx={{fontFamily: "Poppins", paddingTop: {xs: 4, sm: 5, md: 10, lg: 15,},}}>
            <HeadingText/>
            <Companies/>
            <Audience/>
            <GetStart/>
        </Box>
    )
}

export default BlogPage