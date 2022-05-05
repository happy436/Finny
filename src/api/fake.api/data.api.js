const data = {
    categories: [
        {
            icon: "UilUser",
            value: 10000,
            color: "#147BC5"
        },
        {
            icon: "UilUser",
            value: 10000,
            color: "#147BC5"
        },
        {
            icon: "UilUser",
            value: 10000,
            color: "#147BC5"
        },
        {
            icon: "UilUser",
            value: 10000,
            color: "#147BC5"
        },
        {
            icon: "UilUser",
            value: 10000,
            color: "#147BC5"
        },
        {
            icon: "UilUser",
            value: 10000,
            color: "#147BC5"
        },
        {
            icon: "UilUser",
            value: 10000,
            color: "#147BC5"
        },
        {
            icon: "UilUser",
            value: 10000,
            color: "#147BC5"
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

const datta = {
    spendingCategories: [
        {
            icon: "a",
            color: "red",
            list: [
                {
                    year: "2022",
                    list: [
                        {
                            month: "10.2022",
                            list: [
                                {
                                    day: "01.10.2022",
                                    value: 100
                                },
                                {
                                    day: "02.10.2022",
                                    value: 100
                                }
                            ]
                        },
                        {
                            month: "11.2022",
                            list: [
                                {
                                    day: "01.11.2022",
                                    value: 100
                                },
                                {
                                    day: "02.11.2022",
                                    value: 100
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    incomeCategories: [
        {
            icon: "a",
            list: [
                {
                    id: "01.10.2022",
                    value: 100
                },
                {
                    id: "01.10.2022",
                    value: 100
                }

            ]
        }
    ]
}
const result = datta.spendingCategories[0].list.map(item => {
    let result = 0
    item.list.map(item => (
        item.list.map(item => (
            result = result + item.value
        ))
    ))
    return result
})
console.log(...result)
