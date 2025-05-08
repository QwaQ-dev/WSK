import { useCallback, useEffect, useState } from "react";
import { useCountries } from "../../contexts/countries.context"
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "../../layouts/header/header";

/**
 * Country Page 
 * 
 */
export const CountryPage = () => {
    const { countries } = useCountries();
    const [country, setCountry] = useState(null);
    const [totalMedals, setTotalMedals] = useState(0);

    const navigate = useNavigate();

    // country id from url params
    const { id } = useParams();

    const findCountry = useCallback(() => {
        const currentCountry = countries.find(country => country.id === id);

        // redirect if absent country
        if (!currentCountry) return navigate('/');

        // sum all medals
        const total = Object.values(currentCountry.medals).reduce((acc, curr) => acc + curr, 0);

        setTotalMedals(total);

        setCountry(currentCountry);
    }, [countries])

    useEffect(() => {
        findCountry();
    }, [])

    return country && (
        <>
            <Header backPageUrl={"/countries"} />

            <h1>
                {country.name}
            </h1>

            <img
                style={{
                    display: 'flex',
                    margin: '0 auto',
                    width: 'fit-content',
                    marginTop: '0.5rem'
                }}
                src={`/images/flags/${country.flag.split('/')[1]}`}
                alt={`${country.name} Flag`}
            />

            <table>
                <tr>
                    <th>
                        <span>
                            GOLD
                        </span>
                    </th>
                    <th>
                        <span>
                            SILVER
                        </span>
                    </th>
                    <th>
                        <span>
                            BRONZE
                        </span>
                    </th>
                    <th>
                        <span>
                            TOTAL
                        </span>
                    </th>
                </tr>
                <tr>
                    <td>
                        {country.medals.gold}
                    </td>
                    <td>
                        {country.medals.silver}
                    </td>
                    <td>
                        {country.medals.bronze}
                    </td>
                    <td>
                        {totalMedals}
                    </td>
                </tr>
            </table>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                    marginTop: '2.5rem'
                }}
                className="container"
            >
                <Link to={`/countries/${country.id}/medals/gold`} className="btn">
                    <img className="flag" src="/images/medals/gold.png" alt="Gold Medal Photo" />
                    Medals
                </Link>
                <Link to={`/countries/${country.id}/medals/silver`} className="btn">
                    <img className="flag" src="/images/medals/silver.png" alt="Silver Medal Photo" />
                    Medals
                </Link>
                <Link to={`/countries/${country.id}/medals/bronze`} className="btn">
                    <img className="flag" src="/images/medals/bronze.png" alt="Bronze Medal Photo" />
                    Medals
                </Link>
            </div>
        </>
    )

}