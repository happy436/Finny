import { getId } from "../../utils/create_id"

const incomeTransactions = [
    {
        _userId: "001",
        categories: [
            {
                _id: getId(),
                name: "Card",
                categoryId: "67rdca3eeb7f6fgeed471818",
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
                name: "Cash",
                categoryId: "67rdca3eeb7f6fgeed471819",
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
    },
    {
        _userId: "002",
        categories: [
            {
                _id: getId(),
                name: "Card",
                categoryId: "67rdca3eeb7f6fgeed471818",
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
                name: "Cash",
                categoryId: "67rdca3eeb7f6fgeed471819",
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

const fetchAll = () =>
    new Promise(resolve => {
        window.setTimeout(function () {
            resolve(incomeTransactions)
        }, 2000)
    })

export default {
    fetchAll
}
