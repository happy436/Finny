import React, { useContext, useState } from "react"
import Context from "../../../../../context"
import PropTypes from "prop-types"
import s from "../statistic.module.css"
import { UilArrowDown } from "@iconscout/react-unicons"

function Category({ icon, color, data, name, type }) {
    const [active, setActive] = useState(false)
    const { getIcon } = useContext(Context)
    const getSum = data.reduce((prev, curr) => prev.value + curr.value)
    const categoryItem = data.map(item => {
        return (
            <div key={item.id} className={s.data}>
                <span>
                    {item.id}
                </span>
                <span className={type === "incomeCategories" ? s.green : s.red}>
                    {item.value}$
                </span>
            </div>
        )
    })
    return (
        <>
            <div className={`${s.category}`} onClick={() => { active ? setActive(false) : setActive(true) }}>
                <span className={s.data}>
                    <span className={s.icon}>
                        {getIcon(icon, color)}
                    </span>
                    <h4 style={{ color: color }}>{name}</h4>
                    <span className={s.countTransaction}>{data.length}</span>
                </span>
                <span className={s.data}>
                    <b className={`${s.number} ${type === "incomeCategories" ? s.green : s.red}`}>{getSum}$</b>
                    <span className={`${s.arrow} ${active ? s.activeCategory : ""}`}>
                        <UilArrowDown className={type === "incomeCategories" ? s.green : s.red} />
                    </span>
                </span>
            </div>
            <div className={`${s.categoryData} ${active ? s.active : ""} `}>
                {categoryItem}
            </div>
        </>
    )
}

Category.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string,
    data: PropTypes.array,
    type: PropTypes.string
}

export default Category
