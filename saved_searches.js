document.addEventListener('DOMContentLoaded', () => {
    const searchList = document.getElementById('search-list');
    const clearButton = document.getElementById('clear-btn');

    // Example data for saved searches
    const savedSearches = [
        {
            title: "Luxury Apartments in Downtown",
            description: "Estate management for high-end apartments in central city."
        },
        {
            title: "Suburban Family Homes",
            description: "Find the perfect home for growing families in the suburbs."
        },
        {
            title: "Commercial Property Listings",
            description: "Explore estate management for office spaces and commercial buildings."
        },
        {
            title: "Waterfront Villas",
            description: "Browse exclusive estate management for waterfront properties."
        }
    ];

    // Function to render saved searches
    function displaySearches() {
        searchList.innerHTML = '';

        savedSearches.forEach((search, index) => {
            const searchItem = document.createElement('div');
            searchItem.classList.add('saved-search');
            searchItem.innerHTML = `
                <h2>${search.title}</h2>
                <p>${search.description}</p>
            `;
            searchList.appendChild(searchItem);
        });
    }

    // Clear all saved searches
    clearButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all saved searches?')) {
            searchList.innerHTML = '';
        }
    });

    // Initialize saved searches on page load
    displaySearches();
});
