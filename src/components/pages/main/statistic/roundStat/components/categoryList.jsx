import React from "react"
import Category from "./category"
import PropTypes from "prop-types"

function CategoryList({ active, getIcon, data, allSpending }) {
    const list = data.map((item, index) => (
        <Category
            key={index} // заменить
            data={item}
            index={index}
            getIcon={getIcon}
            count={data.length}
            active={active}
            allSpending={allSpending}
        />
    ))

    return <>{list}</>
}

CategoryList.propTypes = {
    active: PropTypes.string,
    getIcon: PropTypes.func,
    data: PropTypes.array,
    allSpending: PropTypes.number
}

export default CategoryList
