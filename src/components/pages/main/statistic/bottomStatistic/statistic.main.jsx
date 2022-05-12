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

    return (
        <section className={`${s.statistic} flex-column d-flex`}>
            <span className={s.horizBlock}>
                <hr className={s.line} />
                <hr className={s.line} />
                <hr className={s.line} />
            </span>
            <span>
                {render(data)}
            </span>
        </section>
    )
}

Statistic.propTypes = {
    data: PropTypes.object
}

export default Statistic
