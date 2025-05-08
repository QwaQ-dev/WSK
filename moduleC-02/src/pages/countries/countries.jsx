import { Link } from "react-router-dom";
import { useCountries } from "../../contexts/countries.context"
import { Header } from "../../layouts/header/header";

/**
 * Countries Page 
 * 
 */
export const CountriesPage = () => {
    const { countries } = useCountries();

    return (
        <>
            <Header backPageUrl={'/'} />

            <h1>
                Countries
            </h1>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                    marginTop: '2.5rem'
                }}
                className="container"
            >
                {countries.map(country => (
                    <>
                        <Link to={`/countries/${country.id}`} className="btn">
                            <img className="flag" src={`/images/flags/${country.flag.split('/')[1]}`} alt={`${country.name} Flag`} />
                            {country.name}
                        </Link>
                    </>
                ))}
            </div>
        </>
    )
}