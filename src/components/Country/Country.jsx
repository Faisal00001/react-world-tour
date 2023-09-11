import { useState } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';
import './Country.css';
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{
                color: `${visited ? ' purple' : 'red'}`
            }}>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>

            <button onClick={() => { handleVisitedCountries(country) }}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit this country'}
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;