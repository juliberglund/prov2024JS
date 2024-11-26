// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`
async function images() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();

    const container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);

    data.slice(0, 10).forEach((imgData) => {
      container.innerHTML += `
        <div>
            <img src="${imgData.url}" alt="${imgData.title}">
        </div>`;
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
images();
