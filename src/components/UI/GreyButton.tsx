import React, {FC, PropsWithChildren} from 'react'
import {Button, ButtonProps, styled} from "@mui/material"

const RawGreyButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: theme.palette.grey["600"],
    borderColor: theme.palette.grey["600"],
    '&:hover': {
      borderColor: theme.palette.grey["900"],
    },
}))

const GreyButton: FC<PropsWithChildren<ButtonProps>> = ({children, ...props}) => {
    return (
        <RawGreyButton {...props}>{children}</RawGreyButton>
    )
}

export default GreyButton