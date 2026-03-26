async function FetchCatFacts() {
  let numFacts = document.getElementById("numFacts").value || 5;
  let factlist = document.getElementById("catFacts");
  factlist.innerHTML = "";
  
  for (let i = 0; i < numFacts; i++){
    let fact = await fetch("https://catfact.ninja/fact");
    let data = await fact.json();
    let factElement = document.createElement("li");
    factElement.textContent = data.fact;
    factlist.appendChild(factElement);
    
    // Add a button inside the item
    let btn = document.createElement("button");
    btn.textContent = "Info";
    btn.onclick = function() {
      alert("Fact has " + data.fact.length + " characters.");
    };
    factElement.appendChild(btn);
  }
  
}