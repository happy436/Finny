import React, {
    useEffect,
    useState /* useEffect, */ /* useState */
} from "react"
/* import { validator } from "../../utils/validator" */
import s from "./login.module.css"
import CardWrapper from "../../common/Card/Card"
import { CheckBoxField, TextField } from "../../common/form"
import PropTypes from "prop-types"
import { validator } from "../../utils/validator"

const RegisterForm = ({ typeChange }) => {
    const [data, setData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        licence: false
    })
    const [errors, setErrors] = useState({})
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
        },
        confirmPassword: {
            isConfirmed: {
                message: "Password not confirmed"
            }
        },
        licence: {
            isRequired: {
                message:
                    "Unable to use the service without confirming the license agreement"
            }
        }
    }
    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        if (data.password !== data.confirmPassword) {
            setErrors(prevState => ({
                ...prevState,
                confirmPassword: "Password not confirmed"
            }))
        }
        return Object.keys(errors).length === 0
    }
    useEffect(() => {
        validate()
    }, [data])

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = e => {
        /* const { profession } = data;
        api.users
            .update(userId, {
                ...data,
                profession: getProfessionById(profession)
            })
            .then((data) => history.push(`/users/${data._id}`)); */
        /* отправка регистрационных данных на сервер */
        /* history.replace(`/login`) */
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
        typeChange()
    }
    return (
        <>
            <CardWrapper style={{ zIndex: "3" }}>
                <div className="row" style={{ width: "100%" }}>
                    <div
                        className={`p-4 d-flex flex-column align-items-center justify-content-center`}
                    >
                        <h3 className={`${s.title} ${s.colorPrim}`}>Finny</h3>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                name="email"
                                label="Email"
                                placeholder="Type your email"
                                onChange={handeChange}
                                value={data.email}
                                error={errors.email}
                            />
                            <TextField
                                name="password"
                                label="Password"
                                type="password"
                                placeholder="Type your password"
                                onChange={handeChange}
                                value={data.password}
                                error={errors.password}
                            />
                            <TextField
                                name="confirmPassword"
                                label="Confirm password"
                                type="password"
                                placeholder="Confirm password"
                                onChange={handeChange}
                                value={data.confirmPassword}
                                error={errors.confirmPassword}
                            />
                            <div className={s.registerContainer}>
                                <CheckBoxField
                                    name="licence"
                                    onChange={handeChange}
                                    value={data.licence}
                                    error={errors.licence}
                                    style={{ gridArea: "r" }}
                                >
                                    I accept the{" "}
                                    <a className={`${s.colorPrim}`}>
                                        Software License Agreement
                                    </a>
                                </CheckBoxField>
                                <button
                                    type="submit"
                                    disabled={!isValid}
                                    className={`btn w-100 mx-auto ${s.submit}`}
                                >
                                    Sign Up
                                </button>
                                <p className={`${s.text} ${s.nr}`}>
                                    Already have account?
                                </p>
                                <a
                                    className={`${s.link} ${s.cra} ${s.colorPrim} m-0`}
                                    onClick={typeChange}
                                    role="button"
                                >
                                    SignIn
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </CardWrapper>
        </>
    )
}

RegisterForm.propTypes = {
    typeChange: PropTypes.func
}

export default RegisterForm
