import { apiInstance } from "../api/instance";

/**
 * Service for countries
 * 
 */
class CountriesService {
    BASE_URL = '/countries'

    // get all data from json server
    async getCountries() {
        const response = await apiInstance.get(this.BASE_URL);

        return response.data;
    }

}

export const countriesService = new CountriesService();