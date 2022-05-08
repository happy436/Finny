const data = {
    spendingCategories: [
        {
            icon: "UilDumbbell",
            color: "#147BC5",
            transaction: [
                {
                    id: "01.01.2022",
                    value: 100
                },
                {
                    id: "02.01.2022",
                    value: 2000
                }
            ]
        },
        {
            icon: "UilPizzaSlice",
            color: "#F29C4C",
            transaction: [
                {
                    id: "01.01.2022",
                    value: 2000
                },
                {
                    id: "02.01.2022",
                    value: 2021
                }
            ]
        },
        {
            icon: "UilEstate",
            color: "#1FCEE5",
            transaction: [
                {
                    id: "01.01.2022",
                    value: 542
                },
                {
                    id: "02.01.2022",
                    value: 234
                }
            ]
        },
        {
            icon: "UilMedicalSquareFull",
            color: "#F24C4C",
            transaction: [
                {
                    id: "01.01.2022",
                    value: 1324
                },
                {
                    id: "02.01.2022",
                    value: 2154
                }
            ]
        },
        {
            icon: "UilCarSideview",
            color: "#FD38A2",
            transaction: [
                {
                    id: "01.01.2022",
                    value: 254
                },
                {
                    id: "02.01.2022",
                    value: 3546
                }
            ]
        },
        {
            icon: "UilShoppingBag",
            color: "#5DBF2F",
            transaction: [
                {
                    id: "01.01.2022",
                    value: 456
                },
                {
                    id: "02.01.2022",
                    value: 154
                }
            ]
        },
        {
            icon: "UilPricetagAlt",
            color: "#D06400",
            transaction: [
                {
                    id: "01.01.2022",
                    value: 100
                },
                {
                    id: "02.01.2022",
                    value: 2000
                }
            ]
        },
        {
            icon: "UilDesktop",
            color: "#1D00D0",
            transaction: [
                {
                    id: "01.01.2022",
                    value: 100
                },
                {
                    id: "02.01.2022",
                    value: 2000
                }
            ]
        }
    ],
    incomeCategories: [
        {
            icon: "UilUser",
            color: "#147BC5",
            transaction: [
                {
                    id: "01.01.2022",
                    value: 100
                },
                {
                    id: "02.01.2022",
                    value: 2000
                }
            ]
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
