import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/home";
import { CountriesPage } from "../pages/countries/countries";
import { CountryPage } from "../pages/country/country";
import { CountryMedalsPage } from "../pages/country-medals/country-medals";
import { DisciplinesPage } from "../pages/disciplines/disciplines";
import { DisciplineCountriesPage } from "../pages/discipline-countries/discipline-countries";
import { DisciplineCountryMedalsPage } from "../pages/discipline-country-medals/discipline-country-medals";

// routes
export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/countries',
        element: <CountriesPage />
    },
    {
        path: '/countries/:id',
        element: <CountryPage />
    },
    {
        path: '/countries/:id/medals/:type',
        element: <CountryMedalsPage />
    },
    {
        path: '/disciplines',
        element: <DisciplinesPage />
    },
    {
        path: '/disciplines/:name',
        element: <DisciplineCountriesPage />
    },
    {
        path: `/disciplines/:name/countries/:countryId`,
        element: <DisciplineCountryMedalsPage />
    }
]);