import React, { useState, useEffect, useRef } from 'react'
import Banner from './components/Banner';
import Search from './components/Search';
import './App.css';
import Card from './components/Card';
import Spinner from './components/Spinner';

// fething specific by country name 
const API_BASE_URL = `https://restcountries.com/v3.1/name/`;
const API_ALL_COUNTRIES_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,flags,currencies,region,population,languages,maps';
const API_OPTIONS = {
  mthod: "GET",
  headers: {
    accept: 'application/json'
  }
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState(``);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allCountries, setAllCountries] = useState([]);
  const [totalResult, setTotalResult] = useState(null);

  const fetchByCountryName = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}${searchTerm}`, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Http Request Error :", response.status);
      }
      const data = await response.json();
      setCountries(data);

      if (!Array.isArray(data) || data.length === 0) {
        setErrorMessage("Invalid country name!");
      } else {
        setErrorMessage('');
        setTotalResult(data.length);
      }
    } catch (error) {
      setCountries([]);
      setErrorMessage("Invalid country name!");
    }
  }

  const fetchAllCountries = async () => {
    try {
      const response = await fetch(`${API_ALL_COUNTRIES_URL}`, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Http Request Error: ", response.status);
      }
      const data = await response.json(); // an array of Countries
      if (data.length === 0) {
        throw new Error("Error requesting countries!");
      }
      setAllCountries(data);

    } catch (error) {
      console.error("Error Fail Requesting : ", error);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    fetchAllCountries();
    return () => clearTimeout(timer);
  }, []);


  return (
    <div id="main-page">
      <Banner />
      <Search
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        fetchByCountryName={fetchByCountryName}
      />
      {errorMessage ? <p style={{ color: 'red' }}>{errorMessage}</p> : <p style={{ color: 'green' }}>total result:  {totalResult ? totalResult : "250 "} Country/s</p>}


      <div className="card-grid">
        {loading ? <Spinner /> :
          // If countries is not empty, show search results, else show all countries
          (countries.length > 0
            ? countries.map(country => (
              <Card key={country.name.common} country={country} />
            ))
            : allCountries.map(country => (
              <Card key={country.name.common} country={country} />
            ))
          )
        }


      </div>

    </div>
  )
}

export default App
