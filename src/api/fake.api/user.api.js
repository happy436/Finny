import { getId } from "../../utils/createId"

const users = [
    {
        _id: getId(),
        email: "asd@a.com",
        currency: {
            chooseCurrency: {
                country: "USA",
                symbol: "$"
            }
        },
        settings: {
            language: "eng",
            theme: "pink"
        }
    }
]

const getAllUsers = () =>
    new Promise(resolve => {
        window.setTimeout(function () {
            resolve(users)
        }, 2000)
    })

export default {
    getAllUsers
}
