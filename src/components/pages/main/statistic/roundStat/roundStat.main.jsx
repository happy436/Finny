import React, { useEffect, useState } from "react"
import s from "./roundStat.module.css"
import CategoryList from "./components/categoryList"
import Account from "./components/account"
import PropTypes from "prop-types"

const RoundStat = ({ data, onChange }) => {
    const [active, setActive] = useState(false)
    function handleActiveClass() {
        setActive(prevState => !prevState)
    }
    const [allIncome, setAllIncome] = useState(0)
    const [allSpending, setAllSpending] = useState(0)
    const [allPrev] = useState(0)
    function onAllTransactions(data) {
        let result = 0
        data.forEach(item => {
            item.transactions.forEach(item => {
                result += item.value
            })
        })
        return result
    }
    useEffect(() => {
        setAllSpending(onAllTransactions(data.spending))
        setAllIncome(onAllTransactions(data.income))
    }, [data])
    useEffect(() => {
        onChange(allIncome, allSpending, allPrev)
    })

    return (
        <section className={`${s.menu} ${active ? s.active : ""} mb-1`}>
            <Account
                onActiveClass={handleActiveClass}
                allIncome={allIncome}
                allSpending={allSpending}
                currency={data.currency.symbol}
            />
            {Object.keys(data).length !== 0 ? (
                <>
                    <span className={`${!active ? s.call : ""}`}></span>
                    <span className={`${!active ? s.call : ""}`}></span>
                </>
            ) : null}
            <ul className={s.nav}>
                {Object.keys(data).length !== 0 ? (
                    <>
                        <CategoryList
                            active={active}
                            data={data.spending}
                            allSpending={allSpending}
                        />
                    </>
                ) : null}
            </ul>
        </section>
    )
}

RoundStat.propTypes = {
    data: PropTypes.object,
    onChange: PropTypes.func
}

export default RoundStat
