// 1. Access the DOM elements
const fetchButton = document.getElementById('fetch-btn');
const countriesContainer = document.getElementById('countries-container');

// 2. Create an async function to fetch the data
 
async function fetchCountries(){
    try{
        countriesContainer.textContent = "Loading...";

        const response = await fetch("/api/country.json");

        if (!response.ok)throw new Error('Failed to fetch all countries');

        const countries = await response.json();

        countriesContainer.textContent = "";


    // Display the countries
        countries.forEach((country) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" />
          <h3>${country.name.common}</h3>
          <p>Region: ${country.region}</p>
          <p>Population: ${country.population.toLocaleString()}</p>
        `;
        countriesContainer.appendChild(card);
      });
  
    } 
    catch(error){
        console.log(error);
        countriesContainer.textContent = "Failed to fetch all countries";
    }
}

// 3. Add an event listener to the button
fetchButton.addEventListener('click', fetchCountries);