import {
    UilBars,
    UilEllipsisV,
    UilDumbbell,
    UilPizzaSlice,
    UilShoppingBag,
    UilEstate,
    UilMedicalSquareFull,
    UilCarSideview,
    UilPricetagAlt,
    UilDesktop,
    UilMoneyWithdraw,
    UilCreditCard,
    UilArrowLeft
} from "@iconscout/react-unicons"
import React from "react"

const getIcon = (icon, color = "#fff") => {
    switch (icon) {
        case "UilBars":
            return <UilBars style={{ fill: color }} />
        case "UilArrowLeft":
            return <UilArrowLeft style={{ fill: color }} />
        case "UilEllipsisV":
            return <UilEllipsisV style={{ fill: color }} />
        case "UilDumbbell":
            return <UilDumbbell style={{ fill: color }} />
        case "UilPizzaSlice":
            return <UilPizzaSlice style={{ fill: color }} />
        case "UilEstate":
            return <UilEstate style={{ fill: color }} />
        case "UilMedicalSquareFull":
            return <UilMedicalSquareFull style={{ fill: color }} />
        case "UilCarSideview":
            return <UilCarSideview style={{ fill: color }} />
        case "UilShoppingBag":
            return <UilShoppingBag style={{ fill: color }} />
        case "UilPricetagAlt":
            return <UilPricetagAlt style={{ fill: color }} />
        case "UilDesktop":
            return <UilDesktop style={{ fill: color }} />
        case "UilMoneyWithdraw":
            return <UilMoneyWithdraw style={{ fill: color }} />
        case "UilCreditCard":
            return <UilCreditCard style={{ fill: color }} />
    }
}

export { getIcon }
