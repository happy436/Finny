import React from "react"
import s from "./layout.module.css"
import { UilBars, UilEllipsisV } from "@iconscout/react-unicons"
import RoundStat from "../statistic/roundStat/roundStat"
import Button from "../button/button"
import Statistic from "../statistic/bottomStatistic/statistic"

const Main = () => {
    const setDate = new Date()
    const day = setDate.getDate()
    const month = setDate.getMonth()
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
        <main
            className={`${s.main_layout} ${s.bg} flex-column align-items-center d-flex min-vh-100`}
        >
            <nav className="d-flex justify-content-between p-3 w-100 flex-shrink-1">
                <button><UilBars /></button>
                <button><UilEllipsisV /></button>
            </nav>
            <data className={`${s.date} d-flex flex-column justify-content-center align-items-center`}>
                <h2 className={s.day}>{day < 10 ? `0${day}` : day}</h2>
                <h3 className={s.month}>{monthList[month]}</h3>
            </data>
            <RoundStat />
            <section className="d-flex justify-content-around w-100">
                <Button type="decrement" />
                <Button type="increment" />
            </section>
            <Statistic />
        </main>
    )
}

export default Main
