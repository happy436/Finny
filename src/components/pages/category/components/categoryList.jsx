import React from "react"
import PropTypes from "prop-types"
import s from "../category.module.css"
import Category from "./category"

function CategoryList({ data, onClick, activeCategory }) {
    return (
        <ul className={`${s.categoryPad}`}>
            {data.map((item, index) => {
                return (
                    <Category
                        key={item._id}
                        item={item}
                        activeCategory={activeCategory}
                        index={index}
                        onClick={onClick}
                    />
                )
            })}
        </ul>
    )
}

CategoryList.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    data: PropTypes.array,
    activeCategory: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

export default CategoryList
