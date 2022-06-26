import React from "react"
import s from "./statistic.module.css"
import PropTypes from "prop-types"
import Category from "./components/category"
import { showCoins } from "../../../../../utils/showCoins"
import { useCategories } from "./../../../../../hooks/useCategories"

const Statistic = ({ data, reminder }) => {
    const { getCategory } = useCategories()
    const render = (data) => {
        return Object.values(data).map((type, index) => {
            return type.map(item => {
                return (
                    <Category
                        key={item._id}
                        categoryColor={getCategory(item.categoryId, index).color}
                        categoryIcon={getCategory(item.categoryId, index).icon}
                        data={item.transactions}
                        name={item.name}
                        type={Object.keys(data)[index]}
                    />
                )
            })
        })
    }

    return (
        <section className={s.statistic}>
            <div className={s.wrapper}>
                <span className={s.horizBlock}>
                    <h2
                        className={`${s.summ} ${
                            reminder >= 0 ? s.green : s.red
                        }`}
                    >
                        {showCoins(reminder)}$
                    </h2>
                    <hr className={s.line} />
                    <hr className={s.line} />
                    <hr className={s.line} />
                </span>
                <span>
                    <ul className={s.list}>{render(data)}</ul>
                </span>
            </div>
        </section>
    )
}

Statistic.propTypes = {
    data: PropTypes.object,
    reminder: PropTypes.number
}

export default Statistic
