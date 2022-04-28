import React from "react"
import { NavLink } from "react-router-dom"
import s from "./roundStat.module.scss"
import PropTypes from "prop-types"

const Category = ({ data, getIcon }) => {
    return (
        <li className={s.item} style={{ "--i": 0 }}>
            <NavLink
                to="/bubbly/profile/"
                className={(isActive) => isActive ? `${s.active}` : ""}
            /* onClick={showContent} */
            >
                {data ? getIcon(data.categories[0].icon) : ""}
            </NavLink>
            <span className="d-flex justify-content-center text-danger mt-1">
                {data ? Math.round((data.categories[0].value * 100) / 32000) : ""}%
            </span>
        </li>
    )
}

Category.propTypes = {
    data: PropTypes.object.isRequired,
    getIcon: PropTypes.func.isRequired
}

export default Category
