import React, { useState } from "react"
import PropTypes from "prop-types"
import s from "../statistic.module.css"
import { useImage } from "../../../../../../hooks/useImage"
import { UilArrowDown } from "@iconscout/react-unicons"

function Category({ categoryIcon, categoryColor, data, name, type }) {
    const [active, setActive] = useState(false)
    const { getIcon } = useImage()
    const getSum = data.reduce((prev, curr) => prev.value + curr.value)
    const categoryItem = data.map(item => {
        const time = new Date(Number(item.created_at))
        const timeFormat = `${String(time.getDate()).padStart(2, 0)}.${String(
            time.getMonth() + 1
        ).padStart(2, 0)}.${String(time.getFullYear())}`
        return (
            <li key={item._id} className={s.data}>
                <span>{timeFormat}</span>
                <span className={type === "incomeCategories" ? s.green : s.red}>
                    {item.value}$
                </span>
            </li>
        )
    })
    return (
        <>
            <li
                className={`${s.category}`}
                onClick={() => {
                    active ? setActive(false) : setActive(true)
                }}
            >
                <span className={s.data}>
                    <span className={s.icon}>
                        {getIcon(categoryIcon, categoryColor)}
                    </span>
                    <h4 style={{ color: categoryColor }}>{name}</h4>
                    <span className={s.countTransaction}>{data.length}</span>
                </span>
                <span className={s.data}>
                    <b
                        className={`${s.number} ${
                            type === "incomeCategories" ? s.green : s.red
                        }`}
                    >
                        {getSum}$
                    </b>
                    <span
                        className={`${s.arrow} ${
                            active ? s.activeCategory : ""
                        }`}
                    >
                        <UilArrowDown
                            className={
                                type === "incomeCategories" ? s.green : s.red
                            }
                        />
                    </span>
                </span>
            </li>
            <ul
                className={`${s.categoryData} ${s.list} ${
                    active ? s.active : ""
                } `}
            >
                {categoryItem}
            </ul>
        </>
    )
}

Category.propTypes = {
    categoryIcon: PropTypes.string,
    categoryColor: PropTypes.string,
    name: PropTypes.string,
    data: PropTypes.array,
    type: PropTypes.string
}

export default Category
