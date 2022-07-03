import httpService from "./http.service";

const categoriesEndpoint = "profession/";

const categoryService = {
    get: async () => {
        const { data } = await httpService.get(categoriesEndpoint);
        return data;
    }
};
export default categoryService;
