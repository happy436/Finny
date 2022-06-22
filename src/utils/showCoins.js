export const showCoins = number => {
    if (number < 10000 && number > -10000) {
        return number.toFixed(2)
    } else {
        return number.toFixed(0)
    }
}
