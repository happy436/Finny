import React, { useEffect, useState } from "react"
import s from "./login.module.css"
import CardWrapper from "../../common/Card/Card"
import { CheckBoxField, TextField } from "../../common/form"
/* import { useHistory } from "react-router-dom" */
import PropTypes from "prop-types"
import { validator } from "../../../utils/validator"

const LoginForm = ({ typeChange }) => {
    /* const history = useHistory() */
    const [data, setData] = useState({ email: "", password: "", stayOn: false })
    const [errors, setErrors] = useState({})
    const [login, setLogin] = useState(false)
    const handeChange = target => {
        setData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Required to fill"
            },
            isEmail: {
                message: "Email entered incorrectly"
            }
        },
        password: {
            isCapitalSymbol: {
                message: "Password must contain at least one capital letter"
            },
            isContainDigit: {
                message: "Password must contain at least one number"
            },
            minLength: {
                message: "Password must be at least 8 characters long",
                value: 8
            }
        }
    }
    useEffect(() => {
        if (login) {
            validate()
        }
    }, [data])

    const isValid = Object.keys(errors).length === 0

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = e => {
        /* отправка регистрационных данных на сервер */
        /* history.replace(`/`) */
        e.preventDefault()
        const isValid = validate()
        setLogin(true)
        if (!isValid) return
        console.log(data)
    }
    return (
        <>
            <CardWrapper style={{ zIndex: "3" }}>
                <div className="row" style={{ width: "100%" }}>
                    <div
                        className={`p-4 d-flex flex-column align-items-center justify-content-center`}
                    >
                        <h3 className={`${s.title} ${s.colorPrim}`}>Finny</h3>
                        <form
                            onSubmit={handleSubmit}
                            style={{ width: "100%" }}
                            className={"d-flex flex-column p-3"}
                        >
                            <TextField
                                name="email"
                                label="Email"
                                placeholder="Type your email"
                                onChange={handeChange}
                                value={data.email}
                                error={errors.email || ""}
                            />
                            <TextField
                                name="password"
                                label="Password"
                                type="password"
                                placeholder="Type your password"
                                onChange={handeChange}
                                value={data.password}
                                error={errors.password || ""}
                            />
                            <div className={s.container}>
                                <CheckBoxField
                                    name="stayOn"
                                    onChange={handeChange}
                                    value={data.stayOn}
                                    style={{ gridArea: "r" }}
                                >
                                    Remember Me
                                </CheckBoxField>
                                <button
                                    type="submit"
                                    className={`btn w-100 mx-auto ${s.submit}`}
                                    disabled={!isValid}
                                >
                                    Login
                                </button>
                                <a className={`${s.link} ${s.colorPrim}`}>
                                    Forgot Password?
                                </a>
                                <p className={`${s.text}`}>Not registred?</p>
                                <a
                                    className={`${s.link} ${s.colorPrim} m-0`}
                                    onClick={typeChange}
                                    role="button"
                                >
                                    Create an account!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </CardWrapper>
        </>
    )
}

LoginForm.propTypes = {
    typeChange: PropTypes.func
}

export default LoginForm
