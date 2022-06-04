import React, { useState } from "react"
import { useParams } from "react-router-dom"
import LoginForm from "./loginForm"
import RegisterForm from "./registerForm"
import commonStyle from "../../common/style.module.css"

const Login = () => {
    const { type } = useParams()
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    )
    const toggleFormType = () => {
        setFormType(prevState =>
            prevState === "register" ? "login" : "register"
        )
    }

    return (
        <main
            className={`${commonStyle.bg} min-vh-100 d-flex align-items-center justify-content-center`}
        >
            {formType === "register" ? (
                <>
                    <RegisterForm typeChange={toggleFormType} />
                </>
            ) : (
                <>
                    <LoginForm typeChange={toggleFormType} />
                </>
            )}
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
    )
}

export default Login
