import React from "react"
import { NavLink } from "react-router-dom"
import s from "../roundStat.module.css"
import PropTypes from "prop-types"
import ProgressRing from "./progressRing"

const Category = ({ data, getIcon, count, index, active, allSpending }) => {
    const { transaction, icon, color } = data
    const value = transaction.reduce((prev, curr) => {
        let result = 0
        result = prev.value + curr.value
        return result
    })
    const percent = Math.round((value * 100) / allSpending)
    const liStyle = {
        "--i": index
    }
    const anchorStyle = {
        transform: `rotate(calc(360deg / -${count} * var(--i)))`
    }
    return (
        <li
            className={s.item}
            style={data ? liStyle : ""}>
            <NavLink
                to="/bubbly/profile/"
                className={(isActive) => isActive ? `${s.active}` : ""}
                style={anchorStyle}
            >
                <ProgressRing
                    data={data}
                    percent={percent}
                    active={active}
                />
                {data ? getIcon(icon, color) : ""}
            </NavLink>
        </li>
    )
}

Category.propTypes = {
    data: PropTypes.object,
    getIcon: PropTypes.func,
    count: PropTypes.number,
    index: PropTypes.number,
    active: PropTypes.string,
    allSpending: PropTypes.number
}

export default Category
