import React, { useEffect, useState, useRef } from "react"
import s from "./transaction.module.css"
import commonStyle from "../../common/style.module.css"
import { useParams } from "react-router-dom"
import { /* UilPen,  */UilCancel } from "@iconscout/react-unicons"
import API from "../../../api"
import Loader from "../../common/loader"
import CardWrapper from "../../common/Card/Card"
import { useImage } from "../../../hooks/useImage"
import { toast } from "react-toastify"

function TransactionPage() {
    const { getIcon } = useImage()
    const [activePad, setActivePad] = useState(false)
    const [data, setData] = useState()
    const { type } = useParams()
    const [pageType] = useState(type === "income" ? type : "spending")
    useEffect(() => {
        API.data.fetchAll().then(data => {
            setData(
                type === "income"
                    ? data.incomeCategories.map(item => ({
                        id: item.id,
                        name: item.name,
                        icon: item.icon,
                        color: item.color
                    }))
                    : data.spendingCategories.map(item => ({
                        id: item.id,
                        name: item.name,
                        icon: item.icon,
                        color: item.color
                    }))
            )
        })
    }, [])
    const [num, setNum] = useState({
        a: "", // first number
        b: "", // second number
        sign: "", // symbol of operation
        result: ""
    })
    /* sometime done
    const [description, setDescription] = useState("") */
    const numericalButton = [
        {
            name: "one",
            keydown: 97,
            value: "1"
        },
        {
            name: "two",
            keydown: 98,
            value: "2"
        },
        {
            name: "three",
            keydown: 99,
            value: "3"
        },
        {
            name: "plus",
            keydown: 107,
            value: "+"
        },
        {
            name: "four",
            keydown: 100,
            value: "4"
        },
        {
            name: "five",
            keydown: 101,
            value: "5"
        },
        {
            name: "six",
            keydown: 102,
            value: "6"
        },
        {
            name: "minus",
            keydown: 109,
            value: "-"
        },
        {
            name: "seven",
            keydown: 103,
            value: "7"
        },
        {
            name: "eight",
            keydown: 104,
            value: "8"
        },
        {
            name: "nine",
            keydown: 105,
            value: "9"
        },
        {
            name: "multiply",
            keydown: 106,
            value: "*"
        },
        {
            name: "dot",
            keydown: 110,
            value: "."
        },
        {
            name: "zero",
            keydown: 96,
            value: "0"
        },
        {
            name: "equals",
            keydown: null,
            value: "="
        },
        {
            name: "divide",
            keydown: 111,
            value: "/"
        },
        {
            name: "chooseCategory",
            style: { gridArea: "b", width: "100%" },
            keydown: 13,
            value: "Choose category"
        }
    ]
    const handleSubmit = (e, index) => {
        e.preventDefault()
        const currentCategory = data[index]
        if (num.a === "" && num.result === "") {
            toast.error("Transaction value is empty")
            return null
        }
        console.log({ _id: currentCategory._id, value: num.result === "" ? num.a : num.result })
    }

    const calculator = () => {
        if (num.sign === "+") {
            setNum(prevState => ({
                ...prevState,
                result: parseFloat(prevState.a) + parseFloat(prevState.b)
            }))
        } else if (num.sign === "-") {
            setNum(prevState => ({
                ...prevState,
                result: parseFloat(prevState.a) - parseFloat(prevState.b)
            }))
        } else if (num.sign === "*") {
            setNum(prevState => ({
                ...prevState,
                result: parseFloat(prevState.a) * parseFloat(prevState.b)
            }))
        } else if (num.sign === "/") {
            setNum(prevState => ({
                ...prevState,
                result: parseFloat(prevState.a) / parseFloat(prevState.b)
            }))
        }
    }
    const handleNumericalPadClick = value => {
        const digit = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."]
        const symbol = ["*", "/", "-", "+", "="]
        if (value === "Choose category") {
            setActivePad(true)
        }
        if (digit.includes(value) && num.sign === "") {
            setNum(prevState => ({ ...prevState, a: prevState.a + value }))
        } else if (symbol.includes(value)) {
            if (value === "=") {
                calculator()
            } else {
                setNum(prevState => ({ ...prevState, sign: value }))
            }
        } else if (digit.includes(value) && num.sign !== "") {
            setNum(prevState => ({ ...prevState, b: prevState.b + value }))
        }
    }
    const renderResult = () => {
        if (num.result === "" && num.sign === "") {
            return num.a
        } else if (num.result === "" && num.b !== "") {
            return num.b
        } else if (num.result === "" && num.sign !== "") {
            return num.sign
        } else if (num.result !== "") {
            return num.result
        }
    }
    const removeInput = () => {
        if (num.result !== "" || num.b !== "") {
            setNum(prevState => ({
                ...prevState,
                result: "",
                b: prevState.b.substring(0, prevState.b.length - 1)
            }))
        } else if (num.b === "" && num.sign !== "") {
            setNum(prevState => ({ ...prevState, sign: "" }))
        } else if (num.sign === "") {
            setNum(prevState => ({
                ...prevState,
                a: prevState.a.substring(0, prevState.a.length - 1)
            }))
        }
    }
    useEffect(() => {
        console.log(num)
    }, [num])
    const useEventListener = (eventName, handler, element = window) => {
        const savedHandler = useRef()

        useEffect(() => {
            savedHandler.current = handler
        }, [handler])

        useEffect(() => {
            const eventListener = event => savedHandler.current(event)
            element.addEventListener(eventName, eventListener)
            return () => {
                element.removeEventListener(eventName, eventListener)
            }
        }, [eventName, element])
    }
    const handlerKeyDown = ({ key }) => {
        console.log(key)
        handleNumericalPadClick(key)
        if (key === "Backspace") {
            removeInput()
        } else if (key === "Enter") {
            setActivePad(true)
        }
    }

    useEventListener("keydown", handlerKeyDown)
    return (
        <>
            <section className={`${s.wrapper} ${commonStyle.bg}`}>
                {activePad ? (
                    <button
                        className={s.back}
                        onClick={() => setActivePad(false)}
                    >
                        {getIcon("UilArrowLeft")}
                    </button>
                ) : null}
                {data ? (
                    <CardWrapper>
                        <form className={s.form} onSubmit={handleSubmit}>
                            <header>
                                {pageType === "income"
                                    ? "New income"
                                    : "New spending"}
                            </header>
                            <main style={{ width: "100%" }}>
                                <div className={s.inputFormWrapper}>
                                    <span></span>
                                    <label>{renderResult()}</label>
                                    <button
                                        className={s.cancelBtn}
                                        onClick={() => removeInput()}
                                        type="button"
                                    >
                                        <UilCancel />
                                    </button>
                                </div>
                                {/* sometime done <div className={s.notionWrapper}>
                                    <UilPen />
                                    <input
                                        value={description}
                                        onChange={e =>
                                            setDescription(e.target.value)
                                        }
                                        placeholder={"Notion"}
                                    />
                                </div> */}
                            </main>
                            <hr style={{ width: "100%" }} />
                            <div>
                                <ul
                                    className={`${s.numericalPad} ${
                                        !activePad ? s.active : ""
                                    }`}
                                >
                                    {numericalButton.map(item => {
                                        return (
                                            <li
                                                key={item.name}
                                                className={s.numItem}
                                                style={item.style}
                                            >
                                                <button
                                                    type="button"
                                                    className={s.numButton}
                                                    onClick={() =>
                                                        handleNumericalPadClick(
                                                            item.value
                                                        )
                                                    }
                                                >
                                                    {item.value}
                                                </button>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <ul
                                    className={`${s.categoryPad} ${
                                        activePad ? s.active : ""
                                    }`}
                                >
                                    {data.map((item, index) => {
                                        return (
                                            <li
                                                key={item.id}
                                                className={s.categoryItem}
                                            >
                                                <button
                                                    type="submit"
                                                    className={s.categoryButton}
                                                    onClick={e =>
                                                        handleSubmit(e, index)
                                                    }
                                                >
                                                    {getIcon(
                                                        item.icon,
                                                        item.color
                                                    )}
                                                    {item.name}
                                                </button>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </form>
                    </CardWrapper>
                ) : (
                    <Loader />
                )}
            </section>
        </>
    )
}

TransactionPage.propTypes = {}

export default TransactionPage
