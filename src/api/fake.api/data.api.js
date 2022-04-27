const data = {
    categories: [
        {
            icon: "UilUser",
            value: 1000
        }
    ]
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(data)
        }, 2000)
    })

export default {
    fetchAll
}
