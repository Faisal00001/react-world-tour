import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])
    const handleVisitedCountries = (country) => {
        console.log('Add to this your visited countries');
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlags = (flag) => {
        console.log("flag adding")
        console.log(flag)
        const newFlags = [...visitedFlags, flag];
        setVisitedFlags(newFlags)
    }

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>
                <h5>Visited Countries:{visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => {
                            return <li key={country.cca3}>{country.name.common}</li>
                        })
                    }

                </ul>
                <div className="flag-container">
                    {
                        visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                    }
                </div>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;