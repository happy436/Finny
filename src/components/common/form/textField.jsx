import React, { useState } from "react"
import PropTypes from "prop-types"
import s from "./form.module.css"

const TextField = ({ label, type, name, value, onChange, error, placeholder, ...rest }) => {
    const [showPassword, setShowPassword] = useState(false)
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "")
    }
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }
    return (
        <div className="mb-4 d-flex flex-column align-items-center">
            <label htmlFor={name} className={`${s.subtitle} ${s.colorPrim}`}> {label}</label>
            <div className="input-group has-validation">
                <input
                    autoComplete="off"
                    type={showPassword ? "text" : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={`${getInputClasses()} ${s.input} ${
                        type === "password" ? (
                            s.borderRadiusLeft) : (
                            s.borderRadius)
                    }`}
                    placeholder={placeholder}
                    {...rest}
                />

                {type === "password" && (
                    <button
                        className={`btn btn-outline-secondary ${s.borderRadiusRight}`}
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
                {error && <div className="invalid-feedback ">{error}</div>}
            </div>
        </div>
    )
}
TextField.defaultProps = {
    type: "text"
}
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    placeholder: PropTypes.string
}

export default React.memo(TextField)
