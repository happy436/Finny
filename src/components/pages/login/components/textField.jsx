import React, { useState } from "react"
import PropTypes from "prop-types"
import s from "../login.module.css"

function TextField({ label, type, name, value, onChange, error }) {
    const [showPassword, setShowPassword] = useState(false)
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "")
    }
    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState)
    }

    return (
        <div className={`mb-4 d-flex flex-column align-items-center`}>
            <label htmlFor={name} className={`${s.subtitle} ${s.colorPrim}`}>
                {label}
            </label>
            <div className="input-group has-validation">
                <input
                    className={`${getInputClasses()} ${s.input} ${
                        type === "password" ? (
                            s.borderRadiusLeft) : (
                            s.borderRadius)
                    }`}
                    type={showPassword ? "text" : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={
                        type !== "password" ? "Type your email" : "Type your password"
                    }
                />
                {type === "password" && (
                    <button
                        className={`btn btn-outline-secondary ${
                            type === "password" ? s.borderRadiusRight : ""
                        }`}
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i
                            className={
                                "bi bi-eye" + (showPassword ? "-slash" : "")
                            }
                        ></i>
                    </button>
                )}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}
TextField.defaultProps = {
    type: "text"
}
TextField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

export default TextField
