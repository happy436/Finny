import React, { useContext } from "react"
import Category from "./category"
import Context from "../../../../../context/"
import PropTypes from "prop-types"

function CategoryList({ active }) {
    const { data, getIcon } = useContext(Context)
    const list = data
        ? data.categories.map((item, index) => (
            <Category
                key={index}
                data={item}
                index={index}
                getIcon={getIcon}
                count={data.categories.length}
                active={active}
            />
        ))
        : ""
    return (
        <>
            {list}
        </>
    )
}

CategoryList.propTypes = {
    active: PropTypes.string
}

export default CategoryList
