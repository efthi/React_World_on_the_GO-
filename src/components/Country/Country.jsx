import React from 'react';
import './Country.css';

const Country = ({country}) => {
    console.log(country.languages.languages);
    
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <p>Official Name: {country.name.official}</p>
            <p>Region: {country.region.region}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <p>Population: {country.languages}</p>
            <p>Area: {country.area.area}</p>
            <p>Coninents: {country.continents.continents}</p>

            <p><span className='tooltip' data-tip={dataHints1} >CCA3: </span>
                {country.cca3.cca3}, 
                <span  className="tooltip" data-tip={dataHints2}>CCN3: </span>
                {country.ccn3.ccn3} 
              </p>
        </div>
    );
};


const dataHints1 ='Alpha-3 Codes are three-digit country codes defined in ISO 3166-1';
const dataHints2 ='Numeric-3 Codes are three-digit country codes defined in ISO 3166-1';

export default Country;