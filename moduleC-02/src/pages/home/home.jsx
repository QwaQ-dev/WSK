import { Link } from "react-router-dom"

/**
 * Home Page 
 * 
 */
export const HomePage = () => {
    return (
        <>
            <div>
                <img
                    style={{
                        display: 'flex',
                        margin: '0 auto',
                        marginTop: '2rem'
                    }}
                    src='/images/logo-white.png'
                    alt="Olympic Games White Logo"
                />

                <img
                    style={{
                        display: 'flex',
                        margin: '0 auto',
                        marginTop: '2rem'
                    }}
                    src='/images/frame.png'
                    alt="Olympic Games Frame Image"
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        marginTop: '3rem'
                    }}
                    className="container"
                >
                    <Link to={'/countries'} className="btn">
                        <img src="/images/ico-countries.svg" alt="Countries Icon" />
                        Countries
                    </Link>
                    <Link to={'/disciplines'} className="btn">
                        <img src="/images/ico-disciplines.svg" alt="Disciplines Icon" />
                        Disciplines
                    </Link>
                </div>
            </div>
        </>
    )
}