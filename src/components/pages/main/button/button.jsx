import React from "react"
import { UilPlus, UilMinus } from "@iconscout/react-unicons"
import s from "./button.module.css"
import { NavLink } from "react-router-dom"

const Button = ({ type }) => {
    const renderButton = () => {
        switch (type) {
            case "increment":
                return (
                    <button className={`${s.button} ${s.increment}`}>
                        <NavLink to="/transaction/income">
                            <UilPlus />
                        </NavLink>
                    </button>
                )
            case "decrement":
                return (
                    <button className={`${s.button} ${s.decrement}`}>
                        <NavLink to="/transaction/spending">
                            <UilMinus />
                        </NavLink>
                    </button>
                )
        }
    }
    return (
        renderButton()
    )
}

export default Button
