async function GenerateFacts() {
  let factList = document.getElementById("catFactList");
  factList.innerHTML = "";
  for (i = 0; i < 5; i++){
    let facts = await fetch("https://catfact.ninja/fact"); 
    let data = await facts.json();
    
    let li = document.createElement("li");
    li.textContent = data.fact;
    
    factList.appendChild(li);
    
    
  }
}