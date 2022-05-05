import React, { useState } from "react"
import s from "./roundStat.module.css"
import CategoryList from "./components/categoryList"

const RoundStat = () => {
    const [active, setActive] = useState("")
    function handleActiveClass() {
        active === "" ? setActive(s.active) : setActive("")
        console.log(active)
    }

    return (
        <section className={`${s.menu} ${active} mb-1`}>
            <menu className={`${s.toggle} flex-column`} onClick={handleActiveClass}>
                <span className="text-success">3000$</span>
                <span className="text-danger">30000$</span>
                <span className="text-info">30000$</span>
            </menu>
            <span className={`${active === "" ? s.call : ""}`}></span>
            <span className={`${active === "" ? s.call : ""}`}></span>
            <ul className={s.nav}>
                <CategoryList active={active}/>
            </ul>
        </section>
    )
}

export default RoundStat
