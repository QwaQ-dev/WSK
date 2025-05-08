import { useEffect, useState } from "react";
import { useCountries } from "../../contexts/countries.context"
import { Header } from "../../layouts/header/header";
import { Link } from "react-router-dom";

/**
 * Disciplines Page 
 * 
 */
export const DisciplinesPage = () => {
    const { countries } = useCountries();

    const [disciplines, setDisciplines] = useState([]);

    /**
     * Get all disciplines from countries array by discipline name.
     * 
     */
    const getDisciplines = () => {
        // unique disciplines
        const findDisciplines = new Map();

        countries.forEach(country => {
            country.disciplines.forEach(discipline => {
                if (!findDisciplines.has(discipline.name)) findDisciplines.set(discipline.name, discipline);
            })
        })

        setDisciplines(Array.from(findDisciplines.values()));
    }

    useEffect(() => {
        getDisciplines();
    }, []);

    return (
        <>
            <Header backPageUrl={'/'} />

            <h1>
                Disciplines
            </h1>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                    marginTop: '2.5rem',
                    marginBottom: '3rem'
                }}
                className="container"
            >
                {disciplines.map(discipline => (
                    <>
                        <Link to={`/disciplines/${discipline.name}`} className="btn">
                            <img className="flag" src={`/images/disciplines/${discipline.image.split(' ').join('').split('/')[1]}`} alt={`Discipline ${discipline.name}`} />
                            {discipline.name}
                        </Link>
                    </>
                ))}
            </div>
        </>
    )
}