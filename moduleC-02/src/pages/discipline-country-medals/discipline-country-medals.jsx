import { useNavigate, useParams } from "react-router-dom";
import { useCountries } from "../../contexts/countries.context"
import { Header } from "../../layouts/header/header";
import { useEffect, useState } from "react";

/**
 * Country disciplines medals Page 
 * 
 */
export const DisciplineCountryMedalsPage = () => {
    const { countries } = useCountries();
    const { name, countryId } = useParams();

    const navigate = useNavigate();

    const [country, setCountry] = useState(null);

    const [totalMedals, setTotalMedals] = useState(0);

    const [discipline, setDiscipline] = useState(null);
    const [countryDiscipline, setCountryDiscipline] = useState(null);

    /**
     * Find Discipline from countries array by discipline name.
     * 
     */
    const getDiscipline = () => {
        countries.forEach(currCountry => {
            currCountry.disciplines.forEach(discipline => {
                if (discipline.name === name) {
                    setDiscipline(discipline);

                    if (currCountry.id === countryId) {
                        const countryDisciplineInfo = currCountry.disciplines.find(cd => cd.name === discipline.name);

                        setCountry(currCountry);
                        setCountryDiscipline(countryDisciplineInfo);

                        const total = Number(countryDisciplineInfo.gold) + Number(countryDisciplineInfo.silver) + Number(countryDisciplineInfo.bronze);

                        // redirect if total invalid
                        if (!total) navigate('/');

                        setTotalMedals(total);
                    }
                }
            })
        })
    }

    useEffect(() => {
        getDiscipline();
    }, []);

    return discipline && (
        <>
            <Header backPageUrl={`/disciplines/${name}`} />

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

            <h1 style={{
                marginTop: '1.5rem'
            }}>
                {country.name}
            </h1>

            <table style={{
                paddingTop: '1.5rem'
            }}>
                <tr>
                    <th>
                        <span
                            style={{
                                top: '0'
                            }}
                        >
                            GOLD
                        </span>
                    </th>
                    <th>
                        <span
                            style={{
                                top: '0'
                            }}
                        >
                            SILVER
                        </span>
                    </th>
                    <th>
                        <span
                            style={{
                                top: '0'
                            }}
                        >
                            BRONZE
                        </span>
                    </th>
                    <th>
                        <span
                            style={{
                                top: '0'
                            }}
                        >
                            TOTAL
                        </span>
                    </th>
                </tr>
                <tr>
                    <td>
                        {countryDiscipline.gold}
                    </td>
                    <td>
                        {countryDiscipline.silver}
                    </td>
                    <td>
                        {countryDiscipline.bronze}
                    </td>
                    <td>
                        {totalMedals}
                    </td>
                </tr>
            </table>
        </>
    )
}