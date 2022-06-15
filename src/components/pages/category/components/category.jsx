import React from "react"
import PropTypes from "prop-types"
import s from "../category.module.css"
import { useImage } from "../../../../hooks/useImage"

function Category({ item, index, onClick, activeCategory }) {
    const { getIcon } = useImage()
    return (
        <li
            key={item._id}
            className={s.categoryItem}
        >
            <button
                type="button"
                className={`${s.categoryButton} ${activeCategory === index ? s.active : null}`}
                onClick={() => onClick(index)}
            >
                {getIcon(
                    item.icon,
                    item.color
                )}
            </button>
        </li>
    )
}

Category.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    onClick: PropTypes.func,
    activeCategory: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

export default Category
