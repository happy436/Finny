import React from "react"
import PropTypes from "prop-types"
import s from "../category.module.css"

function TextField({ onChange, name }) {
    const handleChange = ({ target }) => onChange({ name: target.name, value: target.value })
    return (
        <input
            className={s.input}
            maxLength={12}
            placeholder={"Choose category name"}
            autoComplete="off"
            name={name}
            onChange={handleChange}>
        </input>
    )
}

TextField.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string
}

export default TextField
