import { useRef } from 'react';
import './modal.css';
import closeIcon from '../assets/close.svg';

const Card = ({ country }) => {
    const modalRef = useRef(null);

    const closeModal = () => { modalRef.current.style.display = "none"; modalRef.current.close() };
    const openModal = () => { modalRef.current.style.display = "grid"; modalRef.current.showModal() };

    // Helper functions for extracting values
    const getCurrency = () => {
        const currencies = country.currencies;
        if (!currencies) return '';
        const keys = Object.keys(currencies);
        return keys.length > 0 ? `${currencies[keys[0]].name} (${currencies[keys[0]].symbol})` : '';
    };

    const getLanguages = () => {
        const languages = country.languages;
        return languages ? Object.values(languages).join(', ') : '';
    };

    const getContinents = () => {
        const continents = country.continents;
        // console.log(continents);
        let result = Array.isArray(continents) ? continents.join(", ") : "-";

        return result;
    };

    return (
        <>


            <div
                style={{
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                    padding: "1rem",
                    width: "250px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    backgroundColor: "#fff",
                }}
            >
                <img
                    src={country.flags.png}
                    alt={`${country.name.common} flag`}
                    style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginBottom: "1rem",
                    }}
                />
                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                    {country.name.common}
                </h2>
                <p>
                    <strong>Capital:</strong> {country.capital}
                </p>
                <p>
                    <strong>Region:</strong> {country.region}
                </p>
                <p>
                    <strong>Population:</strong> {country.population.toLocaleString()}
                </p>
                <p>
                    <button onClick={openModal} type='button' style={{
                        cursor: 'pointer',
                        border: 'none',
                        color: 'blue',
                        fontStyle: 'oblique',
                        backgroundColor: 'inherit',

                    }}>Learn more</button>
                </p>
            </div>


            <dialog ref={modalRef} style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                minWidth: '320px',
                display: 'none',
                placeItems: 'center',
                transform: 'translate(-50%, -50%)'
            }}>

                <h2>{country.name.common}</h2>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <tbody>
                        <tr>
                            <td>Official name:</td>
                            <td>{country.name.official}</td>
                        </tr>
                        <tr>
                            <td>Continents:</td>
                            <td>{getContinents()}</td>
                        </tr>
                        <tr>
                            <td>Capital city:</td>
                            <td>{country.capital ? country.capital[0] : '-'}</td>
                        </tr>
                        <tr>
                            <td>Language:</td>
                            <td>{getLanguages()}</td>
                        </tr>
                        <tr>
                            <td>Flag</td>
                            <td>
                                {
                                    <img src={country.flags.svg} alt="c-flag" width={'20px'} />
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Population:</td>
                            <td>{country.population.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>Currency:</td>
                            <td>{getCurrency()}</td>
                        </tr>
                        <tr>
                            <td>Google Maps link:</td>
                            <td>
                                <a href={country.maps?.googleMaps} target="_blank" rel="noopener noreferrer">Open Map</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type='button' onClick={closeModal} style={{ marginTop: '1rem' }}>Ok</button>
            </dialog>

        </>

    )
}

export default Card