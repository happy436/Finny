const users = [
    {
        _id: "lu4EuFz_k8m2LXN1P2EVI",
        email: "asd@a.com",
        currency: {
            country: "USA",
            symbol: "$"
        },
        settings: {
            language: "eng",
            theme: "default"
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
