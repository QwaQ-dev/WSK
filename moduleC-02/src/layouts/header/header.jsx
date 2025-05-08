import { Link } from "react-router-dom"

/**
 * Header
 * 
 * @param {{ backPageUrl: string }} backPageUrl - route path
 */
export const Header = ({ backPageUrl }) => {
    return (
        <>
            <header>
                <Link to={backPageUrl}>
                    <img src="/images/ico-prev.svg" alt="Prev Button Icon" />
                </Link>

                <img src="/images/logo-sm-white.png" alt="Olympics Games Small Logo" />

                <div></div>
            </header>
        </>
    )
}