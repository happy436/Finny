import httpService from "./http.service"
const transactionEndpoint = "transaction/"

const transactionService = {
    createTransaction: async payload => {
        const { data } = await httpService.put(
            transactionEndpoint + payload._id,
            payload
        )
        return data
    },
    getTransactions: async pageId => {
        const { data } = await httpService.get(transactionEndpoint, {
            params: {
                orderBy: '"pageId"',
                equalTo: `"${pageId}"`
            }
        })
        return data
    },
    removeTransaction: async transactionId => {
        const { data } = await httpService.delete(transactionEndpoint + transactionId)
        return data
    }
}
export default transactionService
