import React from "react"
import { NavLink } from "react-router-dom"
import s from "../roundStat.module.css"
import PropTypes from "prop-types"
import ProgressRing from "./progressRing"

const Category = ({ data, getIcon, count, index, active }) => {
    const { value, icon, color } = data
    const percent = value ? Math.round((value * 100) / 32000) : 0
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
    active: PropTypes.string
}

export default Category
