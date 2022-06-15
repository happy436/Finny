import { getId } from "../../utils/create_id"

const spendingTransactions = [
    {
        _userId: "001",
        categories: [
            {
                _id: getId(),
                name: "Sport",
                icon: "UilDumbbell",
                color: "#147BC5",
                transactions: [
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            },
            {
                _id: getId(),
                name: "Food",
                icon: "UilPizzaSlice",
                color: "#F29C4C",
                transactions: [
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            },
            {
                _id: getId(),
                name: "House",
                icon: "UilEstate",
                color: "#1FCEE5",
                transactions: [
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            },
            {
                _id: getId(),
                name: "Medicine",
                icon: "UilMedicalSquareFull",
                color: "#F24C4C",
                transactions: [
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            },
            {
                _id: getId(),
                name: "Transport",
                icon: "UilCarS_ideview",
                color: "#FD38A2",
                transactions: [
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            },
            {
                _id: getId(),
                name: "Shopping",
                icon: "UilShoppingBag",
                color: "#5DBF2F",
                transactions: [
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            },
            {
                _id: getId(),
                name: "Other",
                icon: "UilPricetagAlt",
                color: "#D06400",
                transactions: [
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            },
            {
                _id: getId(),
                name: "Technics",
                icon: "UilDesktop",
                color: "#1D00D0",
                transactions: [
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: getId(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            }
        ]
    }
]

const getIncometransactionss = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(spendingTransactions)
        }, 2000)
    })

export default {
    getIncometransactionss
}
