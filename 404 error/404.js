function search() {
    const query = document.getElementById("searchInput").value;
    if (query) {
        // Redirect to a search results page or perform a search
        // For demonstration, we'll just alert the search term
        alert("Searching for: " + query);
        // You can replace the alert with a redirection to a search results page
        // window.location.href = "search.html?q=" + encodeURIComponent(query);
    } else {
        alert("Please enter a search term.");
    }
}