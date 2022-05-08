import React from "react"
import PropTypes from "prop-types"

function AccountData({ styleClass, value, currency }) {
    return (
        <span className={styleClass}>{`${value}${currency}`}</span>
    )
}

AccountData.propTypes = {
    styleClass: PropTypes.string,
    value: PropTypes.number,
    currency: PropTypes.string
}

export default AccountData
