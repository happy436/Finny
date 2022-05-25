import React, { /* useEffect, */ /* useState */ } from "react"
import commonStyle from "../../common/style.module.css"
/* import { validator } from "../../utils/validator" */
import s from "./login.module.css"
import CardWrapper from "./../../common/Card/Card"
import FormComponent, { CheckBoxField, TextField } from "./../../common/form"
import { useHistory } from "react-router-dom"

const Login = () => {
    const history = useHistory()
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

    const handleSubmit = (data) => {
        /* const { profession } = data;
        api.users
            .update(userId, {
                ...data,
                profession: getProfessionById(profession)
            })
            .then((data) => history.push(`/users/${data._id}`)); */
        history.replace(`/`)
    }
    return (
        <>
            <main
                className={`${commonStyle.bg} min-vh-100 d-flex align-items-center justify-content-center`}
            >
                <CardWrapper style={{ maxWidth: "400px", zIndex: "3" }}>
                    <div className="row">
                        <div
                            className={`p-4 d-flex flex-column align-items-center justify-content-center`}
                        >
                            <h3 className={`${s.title} ${s.colorPrim}`}>
                                Finny
                            </h3>
                            <FormComponent
                                onSubmit={handleSubmit}
                                validatorConfig={validatorConfig}
                            >
                                <TextField
                                    name="email"
                                    label="Email"
                                />
                                <TextField
                                    name="password"
                                    label="Password"
                                    type="password"
                                />
                                <div className={s.container}>
                                    <CheckBoxField style={{ gridArea: "r" }}>
                                        Remember Me
                                    </CheckBoxField>
                                    <button
                                        type="submit"
                                        className={`btn w-100 mx-auto ${s.submit}`}
                                    >
                                        Login
                                    </button>
                                    <a className={`${s.link} ${s.colorPrim}`}>Forgot Password?</a>
                                    <p className={`${s.text}`}>Not registred?</p>
                                    <a className={`${s.link} ${s.colorPrim} m-0`}>Create an account!</a>
                                </div>
                            </FormComponent>
                        </div>
                    </div>
                </CardWrapper>
                <span>
                    <span
                        style={{
                            position: "absolute",
                            width: "260px",
                            height: "260px",
                            left: "-150px",
                            top: "100px",
                            background:
                                "radial-gradient(94.04% 94.04% at -5.38% -9.81%, #5585FF 0%, #F807FD 100%)",
                            borderRadius: "50%",
                            zIndex: "0"
                        }}
                    ></span>
                    <span
                        style={{
                            position: "absolute",
                            width: "135px",
                            height: "126px",
                            right: "10px",
                            top: "446px",
                            background:
                                "radial-gradient(126.67% 145.41% at 106.67% 57.54%, #B56AFF 0%, #0649C7 100%)",
                            borderRadius: "50%",
                            zIndex: "0"
                        }}
                    ></span>
                    <span
                        style={{
                            position: "absolute",
                            width: "70px",
                            height: "70px",
                            left: "65px",
                            top: "500px",
                            background:
                                "radial-gradient(133.57% 133.57% at 100% 0%, #FF6565 0%, #FFD600 100%)",
                            borderRadius: "50%",
                            zIndex: "0"
                        }}
                    ></span>
                </span>
            </main>
        </>
    )
}

export default Login
