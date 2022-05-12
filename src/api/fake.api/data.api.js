function getId() {
    const id = "id" + Math.random().toString(16).slice(2)
    return id
}

const data = {
    incomeCategories: [
        {
            id: getId(),
            name: "Salary",
            icon: "UilMoneyWithdraw",
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
            id: getId(),
            name: "Deposit",
            icon: "UilMoneyWithdraw",
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
    ],
    spendingCategories: [
        {
            id: getId(),
            name: "Sport",
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
            id: getId(),
            name: "Food",
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
            id: getId(),
            name: "House",
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
            id: getId(),
            name: "Medicine",
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
            id: getId(),
            name: "Transport",
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
            id: getId(),
            name: "Shopping",
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
            id: getId(),
            name: "Other",
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
            id: getId(),
            name: "Technics",
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
