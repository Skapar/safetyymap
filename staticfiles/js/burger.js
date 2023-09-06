function openNav(x) {
    document.getElementById("myNav").style.width = "100%"; // Open the overlay
    x.classList.add("change"); // Transform the burger into a cross
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%"; // Close the overlay
    // Transform the cross back into a burger
    const burger = document.querySelector(".burger-container");
    if (burger) {
        burger.classList.remove("change");
    }
}