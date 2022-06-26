import { nanoid } from "nanoid"

const incomeTransactions = [
    {
        _userId: "lu4EuFz_k8m2LXN1P2EVI",
        categories: [
            {
                _id: nanoid(),
                name: "Card",
                categoryId: "67rdca3eeb7f6fgeed471818",
                transactions: [
                    {
                        _id: nanoid(),
                        created_at: "1633576399367",
                        value: 300
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
                name: "Cash",
                categoryId: "67rdca3eeb7f6fgeed471819",
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
    },
    {
        _userId: "002",
        categories: [
            {
                _id: nanoid(),
                name: "Card",
                categoryId: "67rdca3eeb7f6fgeed471818",
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
                name: "Cash",
                categoryId: "67rdca3eeb7f6fgeed471819",
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

const getIncomeTransactions = () =>
    new Promise(resolve => {
        window.setTimeout(function () {
            resolve(incomeTransactions)
        }, 2000)
    })

export default {
    getIncomeTransactions
}
