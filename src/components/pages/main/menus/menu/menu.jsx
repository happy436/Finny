import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import s from "./menu.module.css"
import categories from "../../../../../assets/img/categories.png"
import accounts from "../../../../../assets/img/accounts.png"
import currency from "../../../../../assets/img/currency.png"
import settings from "../../../../../assets/img/settings.png"
import Option from "./components/option"

function Menu({ active, setActive, data }) {
    const [activeList, setActiveList] = useState(false)
    window.scrollTo(0, 0)
    useEffect(() => {
        if (active) {
            document.body.style.overflowY = "hidden"
            document.documentElement.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = ""
            document.documentElement.style.overflowY = ""
        }
    }, [active])

    const options = [
        {
            img: categories,
            name: "categories",
            data: {
                incomeCategories: data.incomeCategories,
                spendingCategories: data.spendingCategories
            }
        },
        {
            img: accounts,
            name: "accounts",
            data: {
                incomeCategories: data.incomeCategories,
                currency: data.currency
            }
        },
        {
            img: currency,
            name: "currency",
            data: {
                ...data.currency
            }
        },
        {
            img: settings,
            name: "settings",
            data: {
                ...data.settings
            }
        }
    ]

    function renderOptions(optionList) {
        return optionList.map(item => {
            return (
                <Option
                    key={item.name}
                    name={item.name}
                    img={item.img}
                    setActiveList={setActiveList}
                    activeList={activeList}
                    data={item.data}
                />
            )
        })
    }

    const hideAside = () => {
        setActive(false)
        setActiveList(false)
    }

    return (
        <>
            <div className={`${s.bg} ${active ? s.active : ""}`} onClick={() => hideAside()}></div>
            <aside className={`${s.menu} ${active ? s.active : ""}`} onClick={(e) => e.stopPropagation()}>
                <ul className={`${s.optionsList} ${activeList ? s.active : ""}`}>
                    {renderOptions(options)}
                </ul>
            </aside>
        </>
    )
}

Menu.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func,
    data: PropTypes.object
}

export default Menu
