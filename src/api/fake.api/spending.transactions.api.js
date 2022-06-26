import { nanoid } from "nanoid"

const spendingTransactions = [
    {
        _userId: "lu4EuFz_k8m2LXN1P2EVI",
        categories: [
            {
                _id: nanoid(),
                name: "Sport",
                categoryId: "67rdca3eeb7f6fgeed472001",
                transactions: [
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 1000
                    },
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            },
            {
                _id: nanoid(),
                name: "Food",
                categoryId: "67rdca3eeb7f6fgeed472002",
                transactions: [
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            },
            {
                _id: nanoid(),
                name: "House",
                categoryId: "67rdca3eeb7f6fgeed472003",
                transactions: [
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            },
            {
                _id: nanoid(),
                name: "Medicine",
                categoryId: "67rdca3eeb7f6fgeed472004",
                transactions: [
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            },
            {
                _id: nanoid(),
                name: "Transport",
                categoryId: "67rdca3eeb7f6fgeed472005",
                transactions: [
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            },
            {
                _id: nanoid(),
                name: "Shopping",
                categoryId: "67rdca3eeb7f6fgeed472006",
                transactions: [
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            },
            {
                _id: nanoid(),
                name: "Other",
                categoryId: "67rdca3eeb7f6fgeed472007",
                transactions: [
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            },
            {
                _id: nanoid(),
                name: "Technics",
                categoryId: "67rdca3eeb7f6fgeed472008",
                transactions: [
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    },
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 100
                    }
                ]
            }
        ]
    }
]

const getSpendingTransactions = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(spendingTransactions)
        }, 2000)
    })

export default {
    getSpendingTransactions
}
