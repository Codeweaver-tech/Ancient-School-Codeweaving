document.addEventListener('DOMContentLoaded', function() {
    const verses = document.querySelectorAll('.invocation');
    const backgroundMusic = document.getElementById('background-music');

    let currentVerse = 0;

    function showNextVerse() {
        if (currentVerse < verses.length) {
            verses[currentVerse].style.opacity = 1;
            currentVerse++;
            setTimeout(showNextVerse, 4000); // Change verse every 4 seconds
        }
    }

    backgroundMusic.play();
    showNextVerse();
});
