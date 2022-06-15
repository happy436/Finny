import React, { useContext } from "react"
import PropTypes from "prop-types"
import {
    UilBars, UilEllipsisV, UilDumbbell, UilPizzaSlice, UilShoppingBag, UilEstate,
    UilMedicalSquareFull, UilCarSideview, UilPricetagAlt, UilDesktop, UilMoneyWithdraw,
    UilCreditCard, UilArrowLeft, UilBusSchool, UilBath, UilBabyCarriage,
    UilCar, UilCoffee, UilGlassMartiniAlt, UilPlaneDeparture, UilRestaurant, UilFilm,
    UilMusic, UilCompass, UilBooks, UilGraduationCap, UilPalette, UilDrill, UilPhone,
    UilMoneybagAlt
} from "@iconscout/react-unicons"

const ImageContext = React.createContext()

export const useImage = () => {
    return useContext(ImageContext)
}

const ImageProvider = ({ children }) => {
    const getIcon = (icon, color = "#fff") => {
        switch (icon) {
            case "UilMoneybagAlt":
                return <UilMoneybagAlt style={{ fill: color }} />
            case "UilPhone":
                return <UilPhone style={{ fill: color }} />
            case "UilDrill":
                return <UilDrill style={{ fill: color }} />
            case "UilPalette":
                return <UilPalette style={{ fill: color }} />
            case "UilGraduationCap":
                return <UilGraduationCap style={{ fill: color }} />
            case "UilBooks":
                return <UilBooks style={{ fill: color }} />
            case "UilCompass":
                return <UilCompass style={{ fill: color }} />
            case "UilMusic":
                return <UilMusic style={{ fill: color }} />
            case "UilFilm":
                return <UilFilm style={{ fill: color }} />
            case "UilRestaurant":
                return <UilRestaurant style={{ fill: color }} />
            case "UilPlaneDeparture":
                return <UilPlaneDeparture style={{ fill: color }} />
            case "UilGlassMartiniAlt":
                return <UilGlassMartiniAlt style={{ fill: color }} />
            case "UilCoffee":
                return <UilCoffee style={{ fill: color }} />
            case "UilCar":
                return <UilCar style={{ fill: color }} />
            case "UilBabyCarriage":
                return <UilBabyCarriage style={{ fill: color }} />
            case "UilBath":
                return <UilBath style={{ fill: color }} />
            case "UilBars":
                return <UilBars style={{ fill: color }} />
            case "UilBusSchool":
                return <UilBusSchool style={{ fill: color }} />
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
    return (
        <ImageContext.Provider value={{ getIcon }}>
            {children}
        </ImageContext.Provider>
    )
}

ImageProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default ImageProvider
