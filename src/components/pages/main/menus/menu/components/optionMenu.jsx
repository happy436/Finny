import React, { useContext } from "react"
import PropTypes from "prop-types"
import Context from "../../../../../context"
import s from "../menu.module.css"
import { UilPlus, UilExchange } from "@iconscout/react-unicons"

function OptionMenu({ type, data }) {
    const { getIcon } = useContext(Context)
    const render = (type) => {
        switch (type) {
            case "categories":
                return (
                    <>
                        <span className={s.optionMenuHeader}>
                            <b>Spending</b>
                            <button>
                                <UilPlus />
                            </button>
                        </span>
                        <ul>
                            {data.spendingCategories.map(item => (
                                <li key={item.id} className={s.optionMenuItem}>
                                    {getIcon(item.icon, "#FFF")}
                                    <p>{item.name[0].toUpperCase() + item.name.slice(1)}</p>
                                </li>
                            ))}
                        </ul>
                        <span className={s.optionMenuHeader}>
                            <b>Income</b>
                            <button>
                                <UilPlus />
                            </button>
                        </span>
                        <ul>
                            {data.incomeCategories.map(item => (
                                <li key={item.id} className={s.optionMenuItem}>
                                    {getIcon(item.icon, "#FFF")}
                                    <p>{item.name[0].toUpperCase() + item.name.slice(1)}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                )
            case "accounts":
                return (
                    <>
                        <span className={s.optionMenuHeader}>
                            <b>Add</b>
                            <button>
                                <UilPlus />
                            </button>
                        </span>
                        <ul>
                            {data.incomeCategories.map(item => (
                                <li key={item.id} className={`${s.optionMenuItem} ${s.accountIcon}`}>
                                    {getIcon(item.icon, "#FFF")}
                                    <span className={s.accountItemData}>
                                        <p>{item.name[0].toUpperCase() + item.name.slice(1)}</p>
                                        <p>
                                            {`${item
                                                .transaction
                                                .reduce((p, c) => p.value + c.value)
                                                .toFixed(2)
                                            } ${data.currency}`}</p>
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <span className={s.optionMenuHeader}>
                            <b>Transfer</b>
                            <button>
                                <UilExchange />
                            </button>
                        </span>
                    </>
                )
        }
    }
    return (
        <>
            {render(type)}
        </>
    )
}

OptionMenu.propTypes = {
    type: PropTypes.string,
    data: PropTypes.object
}

export default OptionMenu
