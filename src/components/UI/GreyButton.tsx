import React, {FC, forwardRef, PropsWithChildren} from "react"
import {Button, ButtonProps, styled} from "@mui/material"

const RawGreyButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: theme.palette.grey["600"],
    borderColor: theme.palette.grey["600"],
    "&:hover": {
        borderColor: theme.palette.grey["900"],
    },
}))

const GreyButton: FC<PropsWithChildren<ButtonProps>> = forwardRef(({children, ...props}, ref) => {
    return (
        <RawGreyButton ref={ref} {...props}>{children}</RawGreyButton>
    )
})

export default GreyButton