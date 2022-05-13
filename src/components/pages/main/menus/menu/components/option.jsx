import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import s from "../menu.module.css"
import OptionMenu from "./optionMenu"

function Option({ name, img, setActiveList, activeList, data }) {
    const [active, setActive] = useState(false)
    const showOptionMenu = () => {
        if (active) {
            setActive(false)
            setActiveList(false)
        } else {
            setActive(true)
            setActiveList(true)
        }
    }
    useEffect(() => {
        if (!activeList && active) {
            setActive(false)
        }
    }, [activeList])

    return (
        <li className={`${s.option} ${active ? `${s.active}` : ``} w-100`}
        >
            <button
                className={s.optionBtn}
                onClick={() => showOptionMenu()}
            >
                <img src={img} className={s.optionImg}></img>
                <h3
                    className={s.optionTitle}
                >
                    {name[0].toUpperCase() + name.slice(1)}
                </h3>
            </button>
            <div
                className={`${s.optionItem} ${active ? s.active : ""}`}
            >
                <OptionMenu
                    data={data}
                    type={name}
                />
            </div>
        </li>
    )
}

Option.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    setActiveList: PropTypes.func,
    activeList: PropTypes.bool,
    data: PropTypes.object
}

export default Option
