import React from "react"
import PropTypes from "prop-types"
import s from "./Card.module.css"

const CardWrapper = ({ children, style }) => {
    return (
        <section className={s.cardWrapper} style={ style }>
            {children}
        </section>)
}

CardWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    style: PropTypes.object
}

export default CardWrapper
