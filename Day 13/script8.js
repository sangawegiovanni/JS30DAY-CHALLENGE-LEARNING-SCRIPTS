async function SearchCountry() {
  const input = document.getElementById("Search").value.trim();

  if (!input) {
    alert("Please enter a country name");
    return;
  }

  const container = document.getElementById("results");
  container.innerHTML = "Searching for country....";

  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${input}`);

    if (!response.ok) {
      throw new Error("Country not found");
    }

    const data = await response.json();
    renderResults(data);

  } catch (error) {
    container.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
}

function renderResults(data) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  data.forEach(country => {
    const div = document.createElement("div");

    div.classList.add("card"); // use your CSS class

    div.innerHTML = `
      <h3>${country.name.common}</h3>
      <p>Population: ${country.population.toLocaleString()}</p>
      <img src="${country.flags.png}" width="100">
    `;

    container.appendChild(div);
  });
}