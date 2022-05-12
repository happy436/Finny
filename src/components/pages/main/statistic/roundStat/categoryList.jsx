import React from "react"
import Category from "./category"
import PropTypes from "prop-types"

function CategoryList({ getIcon, data }) {
    const list = data.categories.map((item, index) => (
        <Category
            key={index}
            getIcon={getIcon}
            data={item}
            index={index}
            count={data.categories.length}
        />
    ))
    return (
        <>
            {list}
        </>
    )
}

CategoryList.propTypes = {
    data: PropTypes.object,
    getIcon: PropTypes.func.isRequired
}

export default CategoryList
