import React from "react"
import PropTypes from "prop-types"
import s from "./menu.module.css"

function Menu({ active, setActive }) {
    window.scrollTo(0, 0)
    if (active) {
        document.body.style.overflowY = "hidden"
    } else {
        document.body.style.overflowY = ""
    }
    console.log(active)

    return (
        <>
            <div className={`${s.bg} ${active ? s.active : ""}`} onClick={() => setActive(false)}></div>
            <aside className={`${s.menu} ${active ? s.active : ""}`} onClick={(e) => e.stopPropagation()}>
                aaaa
            </aside>
        </>
    )
}

Menu.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func
}

export default Menu
