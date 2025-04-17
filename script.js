// I know that generally, this many comments is excessive, but I had no idea
// how to do this before and wanted to note the specific function of each section for myself.

document.addEventListener("DOMContentLoaded", () => {
// Get all the nav links at top of page
const links = document.querySelectorAll(".tab-link");

// Creates a div where the external HTML content will be loaded
const content = document.createElement("div");
content.id = "tab-content"; // Sets an ID so content can be referred to
document.body.appendChild(content); // Add it to the end of body

// Loads HTML content into content div
function loadContent(file) {
    fetch(file) // Fetches file
        .then(res => res.text()) // Converts response to plain text
        .then(html => content.innerHTML = html); // Inserts HTML into page
}

// Add click event listeners to each tab link
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // Prevent the link from navigating away

        // Removea the "active" class from all links, then adds it to clicked one
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // Loads the file specified in data-tab
        loadContent(link.dataset.tab);
    });
});

// Loads the "overview.html" content by default when the page first loads
loadContent("overview.html");
});