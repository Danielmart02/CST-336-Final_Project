function validateSearch() {
    const searchInput = document.getElementById('searchArtistInput').value.trim();
    if (!searchInput) {
        alert('Please enter a search term.');
        return false; 
    }
    return true; 
}