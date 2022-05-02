import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import s from "./roundStat.module.scss"
import { UilUser, UilEnvelope, UilHome, UilMusic, UilSetting } from "@iconscout/react-unicons"
import API from "../../../../../api"

const RoundStat = () => {
    const [data, setData] = useState()
    useEffect(() => {
        API.data.fetchAll().then(data => {
            setData(data)
        })
    }, [])
    window.data = data

    const getIcon = (icon) => {
        switch (icon) {
        case "UilUser":
            return <UilUser />
        }
    }
    return (
        <section className={`${s.menu} ${data ? s.active : ""} mb-5`}>
            <menu className={`${s.toggle} d-flex flex-column align-items-center justify-content-center`}>
                <span className="text-success">3000$</span>
                <span className="text-danger">30000$</span>
                <span className="text-info">30000$</span>
            </menu>
            <ul className={s.nav}>
                <li className={s.item} style={{ "--i": 0 }}>
                    <NavLink
                        to="/bubbly/profile/"
                        className={(isActive) => isActive ? `${s.active}` : ""}
                    /* onClick={showContent} */
                    >
                        {data ? getIcon(data.categories[0].icon) : ""}
                    </NavLink>
                    <span className="d-flex justify-content-center text-danger mt-1">
                        {data ? Math.round((data.categories[0].value * 100) / 32000) : ""}%
                    </span>
                </li>
                <li className={s.item} style={{ "--i": 1 }}>
                    <NavLink
                        className={(isActive) => isActive ? `${s.active}` : ""}
                        to="/bubbly/messages/"
                    /* onClick={props.showContent} */
                    >
                        <UilEnvelope />
                    </NavLink>
                </li>
                <li className={s.item} style={{ "--i": 2 }}>
                    <NavLink
                        className={(isActive) => isActive ? `${s.active}` : ""}
                        to="/bubbly/news"
                    /* onClick={props.showContent} */
                    >
                        <UilHome />
                    </NavLink>
                </li>
                <li className={s.item} style={{ "--i": 3 }}>
                    <NavLink
                        className={(isActive) => isActive ? `${s.active}` : ""}
                        to="/bubbly/music"
                    /* onClick={props.showContent} */
                    >
                        <UilMusic />
                    </NavLink>
                </li>
                <li className={s.item} style={{ "--i": 4 }}>
                    <NavLink
                        className={(isActive) => isActive ? `${s.active}` : ""}
                        to="/bubbly/settings"
                    /* onClick={props.showContent} */
                    >
                        <UilSetting />
                    </NavLink>
                </li>
                <li className={s.item} style={{ "--i": 5 }}>
                    <NavLink
                        className={(isActive) => isActive ? `${s.active}` : ""}
                        to="/bubbly/settings"
                    /* onClick={props.showContent} */
                    >
                        <UilSetting />
                    </NavLink>
                </li>
                <li className={s.item} style={{ "--i": 6 }}>
                    <NavLink
                        className={(isActive) => isActive ? `${s.active}` : ""}
                        to="/bubbly/settings"
                    /* onClick={props.showContent} */
                    >
                        <UilSetting />
                    </NavLink>
                </li>
                <li className={s.item} style={{ "--i": 7 }}>
                    <NavLink
                        className={(isActive) => isActive ? `${s.active}` : ""}
                        to="/bubbly/settings"
                    /* onClick={props.showContent} */
                    >
                        <UilSetting />
                    </NavLink>
                </li>
            </ul>
        </section>
    )
}

export default RoundStat
