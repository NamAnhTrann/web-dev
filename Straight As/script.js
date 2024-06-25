// script.js
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('expandingTextarea');

    textarea.addEventListener('input', function() {
        this.style.height = 'auto'; // Reset height to auto
        this.style.height = (this.scrollHeight) + 'px'; // Adjust height based on scrollHeight
    });
});
