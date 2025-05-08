import { useNavigate, useParams } from "react-router-dom";
import { useCountries } from "../../contexts/countries.context"
import { Header } from "../../layouts/header/header";
import { useEffect, useState } from "react";

/**
 * Country all medals page 
 * 
 */
export const CountryMedalsPage = () => {
    const { countries } = useCountries();
    const [country, setCountry] = useState(null);
    const { id, type } = useParams();

    const navigate = useNavigate();

    /**
     * Get Discipline Medals by country id
     * 
     */
    const getDisciplineMedals = () => {
        const findCountry = countries.find(country => country.id === id);

        // redirect if absent category
        if (!findCountry) navigate(`/`);

        setCountry(findCountry);
    }

    useEffect(() => {
        getDisciplineMedals()
    }, [])

    return country && (
        <>
            <Header backPageUrl={`/countries/${id}`} />

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

            <h4
                style={{
                    display: 'flex',
                    margin: '0 auto',
                    color: 'white',
                    fontWeight: '400',
                    fontSize: '1.2rem',
                    marginTop: '2rem',
                    lineHeight: '1'
                }}
            >
                {type.toUpperCase()} MEDALS
            </h4>
            <span
                style={{
                    display: 'flex',
                    margin: '0 auto',
                    fontSize: '4rem',
                    color: 'white',
                    marginTop: '-0.75rem',
                    fontWeight: '500'
                }}
            >
                {country.medals[type]}
            </span>

            <table>
                <tr>
                    <th>
                        <span
                            style={{
                                padding: '0 3.5rem',
                                top: '0'
                            }}
                        >
                            DISCIPLINE
                        </span>
                    </th>
                    <th>
                        <span
                            style={{
                                top: '0'
                            }}
                        >
                            MEDALS
                        </span>
                    </th>
                </tr>
                {country.disciplines.map(discipline => (
                    <>
                        <tr>
                            <td
                                style={{
                                    textAlign: 'start',
                                    fontWeight: '300'
                                }}
                            >
                                {discipline.name}
                            </td>
                            <td
                                style={{
                                    fontWeight: '300'
                                }}
                            >
                                {discipline[type]}
                            </td>
                        </tr>
                    </>
                ))}
            </table>
        </>
    )
}