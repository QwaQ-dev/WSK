import { Link, useNavigate, useParams } from "react-router-dom";
import { useCountries } from "../../contexts/countries.context"
import { useEffect, useState } from "react";
import { Header } from "../../layouts/header/header";

/**
 * Discipline Countries Page 
 * 
 */
export const DisciplineCountriesPage = () => {
    const { countries } = useCountries();
    const [discipline, setDiscipline] = useState(null)
    const { name } = useParams();

    const navigate = useNavigate();

    const [findCountries, setFindCountries] = useState([]);

    /**
     * Find discipline from all countries
     */
    const getDiscipline = () => {
        // discipline
        let findDiscipline = null;

        countries.forEach(country => {
            country.disciplines.forEach(discipline => {
                if (discipline.name === name) findDiscipline = discipline;
            })
        })

        // redirect if discipline absent
        if (!findDiscipline) navigate('/');

        setDiscipline(findDiscipline);
    }

    /**
     * Get Discipline Countries.
     * 
     */
    const getDisciplineCountries = () => {
        // uniques countries map
        const countriesMap = new Map();

        countries.forEach(country => {
            const discipline = country.disciplines.find(d => d.name === name);

            if (discipline) {
                if (!countriesMap.has(country.name)) countriesMap.set(country.name, country)
            }
        });

        setFindCountries(Array.from(countriesMap.values()));
    }

    useEffect(() => {
        getDiscipline();
        getDisciplineCountries();
    }, []);

    return discipline && (
        <>
            <Header backPageUrl={'/disciplines'} />

            <h1>
                {name.toUpperCase()}
            </h1>

            <img
                style={{
                    display: 'flex',
                    margin: '0 auto',
                    marginTop: '1rem'
                }}
                src={`/images/disciplines/${discipline.image.split(' ').join('').split('/')[1]}`}
                alt={`Discipline ${discipline.name}`}
            />

            <table>
                <tr>
                    <th>
                        <span
                            style={{
                                padding: '0 3.5rem',
                                top: '0'
                            }}
                        >
                            COUNTRY
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
                {findCountries.map(country => {
                    const currDiscipline = country.disciplines.find(discipline => discipline.name === name);

                    return (
                        <>
                            <tr>
                                <td
                                    style={{
                                        textAlign: 'start',
                                        fontWeight: '600',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    <Link style={{
                                        color: 'white'
                                    }} to={`/disciplines/${discipline.name}/countries/${country.id}`}>
                                        {country.name}
                                    </Link>
                                </td>
                                <td
                                    style={{
                                        fontWeight: '300'
                                    }}
                                >
                                    {currDiscipline.gold + currDiscipline.bronze + currDiscipline.silver}
                                </td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </>
    )
}