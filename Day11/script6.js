async function loadFeed() {
  
  let feed = document.getElementById("feed");
  feed.innerHTML = "";
  
  for (let i = 0; i < 5; i++){
    let facts = await fetch("https://catfact.ninja/fact");
    let data = await facts.json();
    
    let post = document.createElement("div");
    post.className = "card";
    
    let title = document.createElement("h2");
    title.textContent = "Post" + (i + 1);
    title.className = "card-title";
    
    let content = document.createElement("p");
    content.textContent = data.fact;
    content.className = "card-content";
    
    let likes = 0;
    let likeBtn = document.createElement("button");
    likeBtn.textContent = "Like";
    likeBtn.className = "likeBtn";
    
    likeBtn.onclick = function () {
      likes++;
      likeBtn.textContent = "Liked (" + likes + ")"
    }
    
    let infoBtn = document.createElement("button");
    infoBtn.textContent = "info";
    infoBtn.className = "infoBtn";
    infoBtn.onclick = function () {
      alert("Lenght:" + data.fact.length)
    }
    
    post.appendChild(title);
    post.appendChild(content);
    post.appendChild(likeBtn);
    post.appendChild(infoBtn);
    feed.appendChild(post);
  }
}