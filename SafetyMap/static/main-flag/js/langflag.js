// your_js_file.js

let flags = ['en', 'kz', 'ru'];
let currentIndex = 0;
let staticUrl = "static/main-flag/flags-gif/";  // Replace with your actual static URL

function switchFlag(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = flags.length - 1;
    if (currentIndex >= flags.length) currentIndex = 0;
    document.getElementById("flag").src = staticUrl + flags[currentIndex] + ".gif";
}

function redirectToPage() {
    switch (flags[currentIndex]) {
        case 'en':
            window.location.href = redirectedUrl;
            break;
        case 'kz':
            window.location.href = kzPageUrl;
            break;
        case 'ru':
            window.location.href = ruPageUrl;
            break;
    }
}
