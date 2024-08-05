import { SxProps, TextareaAutosize } from "@mui/material";
import { CSSProperties } from "react";

type Props = {
    placeholder?: string,
    value: string,
    handleChange: (value: string) => void,
    containerStyle?: CSSProperties,
    minRows?: number,
    maxRows?: number,
    maxLength?: number
}

export default function TextArea({
    placeholder,
    value,
    handleChange,
    containerStyle,
    minRows,
    maxRows,
    maxLength
}: Props) {
    return (<TextareaAutosize
        placeholder={placeholder}
        value={value || ''}
        maxRows={maxRows}
        maxLength={maxLength}
        minRows={minRows}
        onChange={(e) => { handleChange(e.currentTarget.value || '') }}
        style={containerStyle}
    />)
}