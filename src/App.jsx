import React from "react"
import s from "./App.module.scss"
import { UilBars, UilEllipsisV } from "@iconscout/react-unicons"
import RoundStat from "./components/statistic/roundStat/roundStat"

function App() {
    return (
        <main
            className={`${s.app} ${s.bg} flex-column align-items-center d-flex min-vh-100`}
        >
            <nav
                className="d-flex justify-content-between p-3 w-100 flex-shrink-1 mb-5"
            >
                <UilBars />
                <UilEllipsisV />
            </nav>
            <RoundStat />
            <div className={s.div}></div>
        </main>
    )
}

export default App
