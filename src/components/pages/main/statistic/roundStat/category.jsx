import React from "react"
import { NavLink } from "react-router-dom"
import s from "./roundStat.module.scss"
import PropTypes from "prop-types"
import ProgressRing from "./progressRing"

const Category = ({ data, getIcon, count, index }) => {
    const { value, icon, color } = data
    const percent = value ? Math.round((value * 100) / 32000) : 0
    const liStyle = {
        "--i": index/* ,
        transform: `rotate(calc(360deg / ${count} * var(--i)))` */
    }
    const anchorStyle = {
        transform: `rotate(calc(360deg / -${count} * var(--i)))`
    }
    return (
        <li
            className={s.item}
            style={liStyle}>
            <NavLink
                to="/bubbly/profile/"
                className={(isActive) => isActive ? `${s.active}` : ""}
                style={anchorStyle}
            >
                <ProgressRing data={data} percent={percent} />
                {data ? getIcon(icon, color) : ""}
            </NavLink>
        </li>
    )
}

Category.propTypes = {
    data: PropTypes.object,
    getIcon: PropTypes.func.isRequired,
    count: PropTypes.number,
    index: PropTypes.number
}

export default Category
