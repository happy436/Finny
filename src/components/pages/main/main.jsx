import React, { useEffect, useState } from "react"
import s from "./main.module.css"
import commonStyle from "../../common/style.module.css"
import RoundStat from "./statistic/roundStat/roundStat.main"
import Button from "./button"
import Statistic from "./statistic/bottomStatistic/statistic.main"
import API from "./../../../api"
import SortMenu from "./menus/sortMenu/sortMenu"
import Menu from "./menus/menu"
import Loader from "../../common/loader"
import { useImage } from "../../../hooks/useImage"

const Main = () => {
    const { getIcon } = useImage()
    const [data, setData] = useState()
    const [activeSortMenu, setActiveSortMenu] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)
    useEffect(() => {
        API.data.fetchAll().then(data => {
            setData(data)
        })
    }, [])
    const listSortType = {
        day: "day",
        week: "week",
        month: "month",
        year: "year"
    }
    const [sortData, setSortData] = useState(listSortType.day)
    const setDate = new Date()
    const day = setDate.getDate()
    const oneJan = new Date(setDate.getFullYear(), 0, 1)
    const numberOfDays = Math.floor((setDate - oneJan) / (24 * 60 * 60 * 1000))
    const week = Math.ceil((setDate.getDay() + 1 + numberOfDays) / 7)
    const month = setDate.getMonth()
    const year = setDate.getFullYear()

    const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    const handleSortData = type => {
        switch (type) {
            case listSortType.day:
                return (
                    <>
                        <h2 className={s.day}>{String(day).padStart(2, 0)}</h2>
                        <h3 className={s.month}>{monthList[month]}</h3>
                    </>
                )
            case listSortType.week:
                return <h2 className={s.day}>{String(week).padStart(2, 0)}</h2>
            case listSortType.month:
                return <h3 className={s.month}>{monthList[month]}</h3>
            case listSortType.year:
                return <h2 className={s.day}>{year}</h2>
        }
    }

    return (
        <main
            className={`${s.main_layout} ${commonStyle.bg} d-flex flex-column justify-content-center align-items-center min-vh-100`}
        >
            {data ? (
                <>
                    <section className={s.main}>
                        <nav className={s.navigation}>
                            <button
                                onClick={() =>
                                    activeSortMenu
                                        ? setActiveSortMenu(false)
                                        : setActiveSortMenu(true)
                                }
                            >
                                {getIcon("UilBars")}
                            </button>
                            <button
                                onClick={() =>
                                    activeMenu
                                        ? setActiveMenu(false)
                                        : setActiveMenu(true)
                                }
                            >
                                {getIcon("UilEllipsisV")}
                            </button>
                        </nav>
                        <time
                            className={s.date}
                            dateTime={`${year}-${month}-${day}`}
                        >
                            {handleSortData(sortData)}
                        </time>
                        <RoundStat data={data} />
                        <section className={s.buttons}>
                            <Button type="decrement" />
                            <Button type="increment" />
                        </section>
                        <section className={s.summ}>
                            <div className={s.wrapper}>
                                <p>9999.00$</p>
                            </div>
                        </section>
                    </section>
                    <Statistic
                        data={{
                            incomeCategories: data.incomeCategories,
                            spendingCategories: data.spendingCategories
                        }}
                    />
                    <SortMenu
                        active={activeSortMenu}
                        typeList={listSortType}
                        setType={setSortData}
                        setActive={setActiveSortMenu}
                    />
                    <Menu
                        active={activeMenu}
                        setActive={setActiveMenu}
                        data={data}
                    />
                </>
            ) : (
                <Loader />
            )}
        </main>
    )
}

export default Main
