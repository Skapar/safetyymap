var modal = document.getElementById("myModal");
var btns = document.querySelectorAll(".modalBtn");
var span = document.getElementsByClassName("close")[0];

btns.forEach(btn => {
    btn.onclick = function() {
        fetchPageAndDisplayInModal("/video/"); // replace with your URL
        modal.style.display = "block";
    }
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function fetchPageAndDisplayInModal(pageUrl) {
    fetch(pageUrl)
    .then(response => response.text())
    .then(data => {
        document.getElementById('modalBody').innerHTML = data;
        // Add this to update the language switcher after the content has been added to the modal
        updateLanguageList();
        updateSelectedFlag();
        const img = document.querySelector('.video-iframe').querySelector("img");
        const url = modal.dataset.url;
        img.setAttribute('src', url);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Initialize a MutationObserver
const observer = new MutationObserver(() => {
  updateLanguageList();
  updateSelectedFlag();
});

// Start observing "modalBody" for child list changes
observer.observe(document.getElementById('modalBody'), { childList: true });
