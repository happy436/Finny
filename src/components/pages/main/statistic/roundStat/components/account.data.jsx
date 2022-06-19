import React from "react"
import PropTypes from "prop-types"
import s from "../roundStat.module.css"

function AccountData({ styleClass, value, currency }) {
    return (
        <span className={`${styleClass} ${s.accountData}`}>{`${value}${currency}`}</span>
    )
}

AccountData.propTypes = {
    styleClass: PropTypes.string,
    value: PropTypes.number,
    currency: PropTypes.string
}

export default AccountData
