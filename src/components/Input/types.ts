import React from "react"
import {Control} from "react-hook-form"
export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    lefticon: string,
    placeHolder: string
    control: Control<any, any>
    name: string
    errorMessage?: string;
}