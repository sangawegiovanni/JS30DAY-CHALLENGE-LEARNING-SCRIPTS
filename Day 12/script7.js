async function SearchCountry(){
  const input = document.getElementById("Search").value;
  const response = await fetch(`https://restcountries.com/v3.1/name/${input}`);
  const data = await response.json();

  renderResults(data);
}
  
  function renderResults(data){
    const container = document.getElementById("results");
    container.innerHTML ="";
    
    data.forEach ( country => {
      const div = document.createElement("div");
      div.innerHTML= `<h3>${country.name.common}</h3>
      <p>Population: ${country.population}</p>
      <img src="${country.flags.png}" width="100">`;
    container.appendChild(div);
    });
  }

