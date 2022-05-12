import React from "react"
import PropTypes from "prop-types"
import s from "./sortMenu.module.css"

function SortMenu({ active, typeList, setType, setActive }) {
    window.scrollTo(0, 0)
    if (active) {
        document.body.style.overflowY = "hidden"
    } else {
        document.body.style.overflowY = ""
    }
    function render(data) {
        return Object.values(data).map(item => {
            return (
                <button
                    key={item}
                    className={s.button}
                    onClick={() => {
                        setType(item)
                        setActive(false)
                    }}
                >
                    {item[0].toUpperCase() + item.slice(1)}
                </button>
            )
        }
        )
    }
    return (
        <>
            <div className={`${s.bg} ${active ? s.active : ""}`} onClick={() => setActive(false)}></div>
            <aside className={`${s.menu} ${active ? s.active : ""}`} onClick={(e) => e.stopPropagation()}>
                {render(typeList)}
            </aside>
        </>
    )
}

SortMenu.propTypes = {
    active: PropTypes.bool,
    typeList: PropTypes.object,
    setType: PropTypes.func,
    setActive: PropTypes.func
}

export default SortMenu
