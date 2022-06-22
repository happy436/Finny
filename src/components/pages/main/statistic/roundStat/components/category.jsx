import React from "react"
import { NavLink } from "react-router-dom"
import s from "../roundStat.module.css"
import PropTypes from "prop-types"
import ProgressRing from "./progressRing"

const Category = ({ data, getIcon, index, active, allSpending }) => {
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
    return (
        <li className={s.item} style={data ? liStyle : ""}>
            <div className={s.progressBar}>
                <div
                    style={{
                        minHeight: `calc(2.3px*${percent}`,
                        backgroundColor: data.color
                    }}
                >
                </div>
            </div>
            <NavLink
                to="/bubbly/profile/"
                className={s.active}
            >
                <ProgressRing data={data} percent={percent} active={active} />
                {data ? getIcon(icon, color) : ""}
            </NavLink>
            <p className={s.text}>{percent}%</p>
        </li>
    )
}

Category.propTypes = {
    data: PropTypes.object,
    getIcon: PropTypes.func,
    count: PropTypes.number,
    index: PropTypes.number,
    active: PropTypes.bool,
    allSpending: PropTypes.number
}

export default Category
