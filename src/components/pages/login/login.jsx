import React, { /* useEffect, */ useState } from "react"
import commonStyle from "../../common/style.module.css"
import { validator } from "../../utils/validator"
import TextField from "./components/textField"
import s from "./login.module.css"

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({})
    const handeChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value })
        )
    }
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Обязательно для заполнения"
            },
            isEmail: {
                message: "Email введет не корректно"
            }
        },
        password: {
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            minLength: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        }
    }
    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }
    return (<>
        <main className={`${commonStyle.bg} min-vh-100 d-flex align-items-center justify-content-center`}>
            <div style={{ zIndex: "3" }}>
                <div className="row">
                    <div className={`col-md-6 offset-md-3 p-4 ${s.formWrapper}`}>
                        <h3 className={`${s.title} ${s.colorPrim}`}>Finny</h3>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                name="email"
                                label="Email"
                                onChange={handeChange}
                                value={data.email}
                                error={errors.email}
                            />
                            <TextField
                                name="password"
                                label="Password"
                                type="password"
                                onChange={handeChange}
                                value={data.password}
                                error={errors.password}
                            />
                            <button
                                className={`btn w-100 mx-auto ${s.submit}`}
                                type="submit"
                                disabled={!isValid}
                                onClick={() => validate()}
                            >
                                Login
                            </button>
                        </form>
                        <a className={s.forgPass}>Forget Password?</a>
                    </div>
                </div>
            </div>
            <span>
                <span style={
                    {
                        position: "absolute",
                        width: "260px",
                        height: "260px",
                        left: "-150px",
                        top: "100px",
                        background: "radial-gradient(94.04% 94.04% at -5.38% -9.81%, #5585FF 0%, #F807FD 100%)",
                        borderRadius: "50%",
                        zIndex: "1"
                    }
                }></span>
                <span style={
                    {
                        position: "absolute",
                        width: "135px",
                        height: "126px",
                        left: "284px",
                        top: "446px",
                        background: "radial-gradient(126.67% 145.41% at 106.67% 57.54%, #B56AFF 0%, #0649C7 100%)",
                        borderRadius: "50%",
                        zIndex: "1"
                    }
                }></span>
                <span style={
                    {
                        position: "absolute",
                        width: "70px",
                        height: "70px",
                        left: "65px",
                        top: "500px",
                        background: "radial-gradient(133.57% 133.57% at 100% 0%, #FF6565 0%, #FFD600 100%)",
                        borderRadius: "50%",
                        zIndex: "1"
                    }
                }></span>
            </span>
        </main>
    </>
    )
}

export default Login
