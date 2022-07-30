import React, {FC, forwardRef} from "react"
import {styled, TextField} from "@mui/material"
import {TextFieldProps} from "@mui/material/TextField/TextField"

const RawGreyInput = styled(TextField)<TextFieldProps>(({theme}) => ({
    "& .MuiInput-root": {
        "&:after": {
            borderBottom: "1px solid #595959",
            transform: "scale(1)",
        }
    },
    "& .MuiInput-root.Mui-focused": {
        "&:after": {
            borderBottom: "2px solid #ffffff",
        }
    },
    "& .MuiInput-input": {
        paddingRight: "24px",
    }
}))

const GreyInput: FC<TextFieldProps> = forwardRef(({...props}, ref) => {
    return (
        <RawGreyInput ref={ref} {...props} />
    )
})

export default GreyInput