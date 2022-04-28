import React from "react"
import { UilPlus, UilMinus } from "@iconscout/react-unicons"
import s from "./button.module.scss"

const Button = ({ type }) => {
    const renderButton = () => {
        switch (type) {
        case "increment":
            return (
                <button className={`${s.button} ${s.increment}`}>
                    <UilPlus/>
                </button>
            )
        case "decrement":
            return (
                <button className={`${s.button} ${s.decrement}`}>
                    <UilMinus/>
                </button>
            )
        }
    }
    return (
        renderButton()
    )
}

export default Button
