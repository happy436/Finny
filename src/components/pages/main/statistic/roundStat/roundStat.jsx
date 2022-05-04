import React, { useEffect, useState } from "react"
import s from "./roundStat.module.scss"
import {
    UilUser /* , UilEnvelope, UilHome, UilMusic, UilSetting */
} from "@iconscout/react-unicons"
import API from "../../../../../api"
import CategoryList from "./categoryList"

const RoundStat = () => {
    const [data, setData] = useState({
        categories: []
    })
    useEffect(() => {
        API.data.fetchAll().then(data => {
            setData(data)
        })
    }, [])
    const getIcon = (icon, color) => {
        switch (icon) {
            case "UilUser":
                return <UilUser style={{ fill: color }} />
        }
    }
    return (
        <section className={`${s.menu} ${data ? s.active : ""} mb-1`}>
            <menu className={`${s.toggle} flex-column`}>
                <span className="text-success">3000$</span>
                <span className="text-danger">30000$</span>
                <span className="text-info">30000$</span>
            </menu>
            <ul className={s.nav}>
                <CategoryList getIcon={getIcon} data={data} />
            </ul>
        </section>
    )
}

export default RoundStat
