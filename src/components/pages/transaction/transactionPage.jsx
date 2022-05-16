import React, { useState } from "react"
/* import PropTypes from "prop-types" */
import s from "./transaction.module.css"
import commonStyle from "../../common/style.module.css"
import { useParams } from "react-router-dom"
import { UilPen, UilCancel } from "@iconscout/react-unicons"

function TransactionPage() {
    const { type } = useParams()
    const [typeTrans] = useState(type === "income" ? type : "spending")
    const [num/* , setNum */] = useState("0")
    const numericalButton = [
        {
            name: "one",
            keydown: 97, // найти значения
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
            keydown: 13,
            value: "Choose category"
        }
    ]
    return (
        <section className={`${s.wrapper} ${commonStyle.bg}`}>
            <form className={s.form}>
                <header>
                    {typeTrans === "income" ? "New income" : "New spending"}
                </header>
                <main style={{ width: "100%" }}>
                    <div className={s.inputFormWrapper}>
                        <span className={s.chooseCategoryBtn}>icon</span>
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
                    <ul className={s.numericalPad}>
                        {numericalButton.map(item => {
                            return (
                                <li
                                    key={item.name}
                                    className={s.numItem}
                                >
                                    <button>
                                        {item.value}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </form>
        </section>
    )
}

TransactionPage.propTypes = {

}

export default TransactionPage
