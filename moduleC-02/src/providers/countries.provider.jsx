import { useCallback, useEffect, useState } from "react"
import { CountriesContext } from "../contexts/countries.context";
import { countriesService } from "../services/countries.service";

export const CountriesProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);

    /**
     * Get all countries from json server
     */
    const getCountries = useCallback(async () => {
        try {
            const data = await countriesService.getCountries();

            setCountries(data);
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getCountries();
    }, [])

    return <CountriesContext.Provider value={{ countries }}>
        {children}
    </CountriesContext.Provider>
} 