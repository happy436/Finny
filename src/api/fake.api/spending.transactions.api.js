import { getId } from "../../utils/create_id"

const spendingTransactions = [
    {
        _userId: "001",
        categories: [
            {
                _id: getId(),
                name: "Sport",
                categoryId: "67rdca3eeb7f6fgeed472001",
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
                categoryId: "67rdca3eeb7f6fgeed472002",
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
                categoryId: "67rdca3eeb7f6fgeed472003",
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
                categoryId: "67rdca3eeb7f6fgeed472004",
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
                categoryId: "67rdca3eeb7f6fgeed472005",
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
                categoryId: "67rdca3eeb7f6fgeed472006",
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
                categoryId: "67rdca3eeb7f6fgeed472007",
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
                categoryId: "67rdca3eeb7f6fgeed472008",
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
