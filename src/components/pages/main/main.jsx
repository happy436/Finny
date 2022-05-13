import React, { useEffect, useState } from "react"
import s from "./layout.module.css"
import commonStyle from "../../common/style.module.css"
import {
    UilBars,
    UilEllipsisV,
    UilDumbbell,
    UilPizzaSlice,
    UilShoppingBag,
    UilEstate,
    UilMedicalSquareFull,
    UilCarSideview,
    UilPricetagAlt,
    UilDesktop,
    UilMoneyWithdraw,
    UilCreditCard
} from "@iconscout/react-unicons"
import RoundStat from "./statistic/roundStat/roundStat.main"
import Button from "./button"
import Statistic from "./statistic/bottomStatistic/statistic.main"
import API from "./../../../api"
import Context from "../../context"
import SortMenu from "./menus/sortMenu/sortMenu"
import Menu from "./menus/menu"

const Main = () => {
    const [data, setData] = useState()
    const [activeSortMenu, setActiveSortMenu] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)
    useEffect(() => {
        API.data.fetchAll().then(data => {
            setData(data)
        })
    }, [])
    const getIcon = (icon, color) => {
        switch (icon) {
            case "UilDumbbell":
                return <UilDumbbell style={{ fill: color }} />
            case "UilPizzaSlice":
                return <UilPizzaSlice style={{ fill: color }} />
            case "UilEstate":
                return <UilEstate style={{ fill: color }} />
            case "UilMedicalSquareFull":
                return <UilMedicalSquareFull style={{ fill: color }} />
            case "UilCarSideview":
                return <UilCarSideview style={{ fill: color }} />
            case "UilShoppingBag":
                return <UilShoppingBag style={{ fill: color }} />
            case "UilPricetagAlt":
                return <UilPricetagAlt style={{ fill: color }} />
            case "UilDesktop":
                return <UilDesktop style={{ fill: color }} />
            case "UilMoneyWithdraw":
                return <UilMoneyWithdraw style={{ fill: color }} />
            case "UilCreditCard":
                return <UilCreditCard style={{ fill: color }} />
        }
    }
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
                        <h2 className={s.day}>{day < 10 ? `0${day}` : day}</h2>
                        <h3 className={s.month}>{monthList[month]}</h3>
                    </>
                )
            case listSortType.week:
                return (
                    <h2 className={s.day}>{week < 10 ? `0${week}` : week}</h2>
                )
            case listSortType.month:
                return <h3 className={s.month}>{monthList[month]}</h3>
            case listSortType.year:
                return <h2 className={s.day}>{year}</h2>
        }
    }

    return (
        <Context.Provider value={{ getIcon }}>
            <main
                className={`${s.main_layout} ${commonStyle.bg} d-flex flex-column justify-content-center align-items-center min-vh-100`}
            >
                {data ? <><section
                    className={
                        "position-fixed d-flex flex-column justify-content-center align-items-center top-0 w-100"
                    }
                >
                    <nav className="d-flex justify-content-between p-3 w-100 flex-shrink-1">
                        <button onClick={() => activeSortMenu ? setActiveSortMenu(false) : setActiveSortMenu(true)}>
                            <UilBars />
                        </button>
                        <button onClick={() => activeMenu ? setActiveMenu(false) : setActiveMenu(true)}>
                            <UilEllipsisV />
                        </button>
                    </nav>
                    <time
                        className={`${s.date} d-flex flex-column justify-content-center align-items-center`}
                        dateTime={`${year}-${month}-${day}`}
                    >
                        {handleSortData(sortData)}
                    </time>
                    <RoundStat data={data} />
                    <section className="d-flex justify-content-around w-100 ">
                        <Button type="decrement" />
                        <Button type="increment" />
                    </section>
                </section>
                <Statistic data={
                    {
                        incomeCategories: data.incomeCategories,
                        spendingCategories: data.spendingCategories
                    }
                } />
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
                /></> : null}

            </main>
        </Context.Provider>
    )
}

export default Main
