// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const container = document.createElement("div");
  container.className = "containerClass";
  document.body.appendChild(container);

  data.forEach((posts) => {
    const postsDiv = document.createElement("div");
    postsDiv.className = "postDivClass";

    postsDiv.innerHTML = `<div>${posts.title}</div>
        <div>${posts.body}</div>`;
    container.appendChild(postsDiv);
    addStyles();
  });
}
function addStyles() {
  const style = document.createElement("style");
  document.head.appendChild(style);
  style.innerHTML = `
        /* Grid layout */
        .containerClass{
          display: grid;
          gap: 20px;
          padding: 20px;
          
        }
    
        /* Desktop: 3 columns */
        @media (min-width: 768px) {
          .containerClass {
            grid-template-columns: repeat(3, 1fr);
          }
        }
    
        /* Mobile: 1 column */
        @media (max-width: 767px) {
          .containerClass {
            grid-template-columns: 1fr;
            width: 100%;
            
          }
        }
      `;
}
fetchData();
