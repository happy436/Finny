import React from "react"
import s from "./statistic.module.css"
import PropTypes from "prop-types"
import Category from "./components/category"

const Statistic = ({ data }) => {
    const render = (data) => {
        return Object.values(data).map((type, index) => {
            return type.map(item => {
                return (
                    <Category
                        key={item.id}
                        color={item.color}
                        icon={item.icon}
                        data={item.transaction}
                        name={item.name}
                        type={Object.keys(data)[index]}
                    />
                )
            })
        })
    }
    const summ = 9999
    const currency = "$"
    const renderSumm = (number) => {
        if (number < 10000 && number > -10000) {
            return number.toFixed(2) + currency
        } else {
            return number + currency
        }
    }

    return (
        <section className={`${s.statistic} flex-column d-flex`}>
            <span className={s.horizBlock}>
                <h2 className={`${s.summ} ${summ >= 0 ? s.green : s.red}`}>{renderSumm(summ)}</h2>
                <hr className={s.line} />
                <hr className={s.line} />
                <hr className={s.line} />
            </span>
            <span>
                <ul className={s.list}>
                    {render(data)}
                </ul>
            </span>
        </section>
    )
}

Statistic.propTypes = {
    data: PropTypes.object
}

export default Statistic
