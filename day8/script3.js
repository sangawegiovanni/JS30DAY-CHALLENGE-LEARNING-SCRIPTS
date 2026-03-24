async function RandomFact() {
  
  let response = await fetch("https://catfact.ninja/fact")
  let data = await response.json();
  document.getElementById("response").textContent = data.fact;
}