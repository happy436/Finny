import React from "react"
import s from "./App.module.scss"
import { UilBars, UilEllipsisV } from "@iconscout/react-unicons"
import RoundStat from "./components/statistic/roundStat/roundStat"
import Button from "./components/button/button"
import Statistic from "./components/statistic/bottomStatistic/statistic"

function App() {
    return (
        <main
            className={`${s.app} ${s.bg} flex-column align-items-center d-flex min-vh-100`}
        >
            <nav
                className="d-flex justify-content-between p-3 w-100 flex-shrink-1 mb-5 mt-3"
            >
                <UilBars />
                <UilEllipsisV />
            </nav>
            <RoundStat />
            <section className="d-flex justify-content-around w-100 mt-5">
                <Button type="decrement"/>
                <Button type="increment"/>
            </section>
            <Statistic />
        </main>
    )
}

export default App
