// script.js

document.getElementById('more-tips-button').addEventListener('click', function() {
    var moreTips = document.getElementById('more-tips');
    if (moreTips.style.display === 'none') {
        moreTips.style.display = 'block';
        this.innerText = 'Show Less Tips';
    } else {
        moreTips.style.display = 'none';
        this.innerText = 'Show More Tips';
    }
});