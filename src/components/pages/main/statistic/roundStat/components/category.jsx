import React from "react"
import { NavLink } from "react-router-dom"
import s from "../roundStat.module.css"
import PropTypes from "prop-types"
import ProgressRing from "./progressRing"
import { useImage } from "../../../../../../hooks/useImage"
import { useCategories } from "./../../../../../../hooks/useCategories"

const Category = ({ data, index, active, allSpending }) => {
    const { transactions } = data
    const { getIcon } = useImage()
    const { getCategory } = useCategories()
    const categoryData = getCategory(data.categoryId, 1)
    const value = transactions.reduce((prev, curr) => {
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
                        backgroundColor: categoryData.color
                    }}
                ></div>
            </div>
            <NavLink to="/bubbly/profile/" className={s.active}>
                <ProgressRing data={data} percent={percent} active={active} />
                {data ? getIcon(categoryData.icon, categoryData.color) : ""}
            </NavLink>
            <p className={s.text}>{percent}%</p>
        </li>
    )
}

Category.propTypes = {
    data: PropTypes.object,
    count: PropTypes.number,
    index: PropTypes.number,
    active: PropTypes.bool,
    allSpending: PropTypes.number
}

export default Category
