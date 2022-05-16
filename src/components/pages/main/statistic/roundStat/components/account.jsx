import React from "react"
import PropTypes from "prop-types"
import s from "../roundStat.module.css"
import AccountData from "./account.data"

function Account({ onActiveClass, allIncome, allSpending, currency }) {
    return (
        <main className={`${s.toggle} flex-column`} onClick={onActiveClass}>
            <AccountData
                styleClass={"text-success"}
                value={allIncome}
                currency={currency} // заменить
            />
            <AccountData
                styleClass={"text-danger"}
                value={allSpending}
                currency={currency} // заменить
            />
            <AccountData
                styleClass={"text-info"}
                value={0}
                currency={currency} // заменить
            />
        </main>
    )
}

Account.propTypes = {
    onActiveClass: PropTypes.func,
    allSpending: PropTypes.number,
    allIncome: PropTypes.number,
    currency: PropTypes.string
}

export default Account
