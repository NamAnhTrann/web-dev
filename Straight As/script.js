// script.js
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('expandingTextarea');

    textarea.addEventListener('input', function() {
        this.style.height = 'auto'; // Reset height to auto
        this.style.height = (this.scrollHeight) + 'px'; // Adjust height based on scrollHeight
    });
});

function handleSearch() {
    const query = document.getElementById('expandingTextarea').value;
    if (query.trim() === "") {
        alert("Please enter a search query.");
        return false; 
    }
    return true;
}

function triggerSearch() {
    document.getElementById('hiddenSubmit').click();
}
