import React, { useEffect, useState } from "react"
import s from "./transaction.module.css"
import commonStyle from "../../common/style.module.css"
import { useParams } from "react-router-dom"
import { UilPen, UilCancel } from "@iconscout/react-unicons"
import API from "../../../api"
import Loader from "../../common/loader"
import CardWrapper from "../../common/Card/Card"
import { useImage } from "../../../hooks/useImage"

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
    console.log(data)
    const [num/* , setNum */] = useState("0")
    const numericalButton = [
        {
            name: "one",
            keydown: 97,
            value: 1
        },
        {
            name: "two",
            keydown: 98,
            value: 2
        },
        {
            name: "three",
            keydown: 99,
            value: 3
        },
        {
            name: "plus",
            keydown: 107,
            value: "+"
        },
        {
            name: "four",
            keydown: 100,
            value: 4
        },
        {
            name: "five",
            keydown: 101,
            value: 5
        },
        {
            name: "six",
            keydown: 102,
            value: 6
        },
        {
            name: "minus",
            keydown: 109,
            value: "-"
        },
        {
            name: "seven",
            keydown: 103,
            value: 7
        },
        {
            name: "eight",
            keydown: 104,
            value: 8
        },
        {
            name: "nine",
            keydown: 105,
            value: 9
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
            value: 0
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
            value: "Choose category",
            onClick: () => setActivePad(true)
        }
    ]
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <>
            <section className={`${s.wrapper} ${commonStyle.bg}`}>
                {activePad ? (
                    <button className={s.back} onClick={() => setActivePad(false)}>
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
                                    <label>{num}</label>
                                    <button className={s.cancelBtn}>
                                        <UilCancel />
                                    </button>
                                </div>
                                <div className={s.notionWrapper}>
                                    <UilPen />
                                    <input
                                        /* onKeyDown={(e) => {
                                console.log(e.keyCode)
                            }}
                            value={num}
                            onChange={e => setNum(e.target.value)} */
                                        placeholder={"Notion"}
                                    />
                                </div>
                            </main>
                            <hr style={{ width: "100%" }} />
                            <div>
                                <ul
                                    className={`${s.numericalPad} ${!activePad ? s.active : ""
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
                                                    className={s.numButton}
                                                    onClick={item.onClick}
                                                >
                                                    {item.value}
                                                </button>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <ul
                                    className={`${s.categoryPad} ${activePad ? s.active : ""
                                    }`}
                                >
                                    {data.map(item => {
                                        return (
                                            <li
                                                key={item.id}
                                                className={s.categoryItem}
                                            >
                                                <button
                                                    className={s.categoryButton}
                                                >
                                                    {getIcon(
                                                        item.icon,
                                                        item.color
                                                    )}
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
