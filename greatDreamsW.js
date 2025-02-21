function search() {
    // Takes input from search bar
    const input = document.querySelector('.input');
    // Converts everything to lowercase
    const simpleInput = input.value.toLowerCase();
    const list = document.querySelector('.linkList');
    const link = list.getElementsByTagName("li");

    for (let i = 0; i < link.length; i++) {
        let a = link[i].getElementsByTagName("a")[0];

        text = a.textContent || a.innerText;
        if (text.toLowerCase().indexOf(simpleInput) >= 0) {
            link[i].style.display = "";
        } else {
            link[i].style.display = "none";
        }
    }
}

// Event listener for when the user clicks on search bar
document.addEventListener("DOMContentLoaded", function() {
    // Gets input from search bar and list of links
    const input = document.querySelector('.input');
    const links = document.querySelector('.linkList');

    // If the search bar is in 'focus', or active, the links are shown
    input.addEventListener("focus", function() {
        links.style.display = "block";
    });

    // If there is an event e of a click somewhere else, search list dissappears
    document.addEventListener("click", function(e) {
        if (!input.contains(e.target) && !links.contains(e.target)) {
            links.style.display = "none";
        }
    });

    // If the search bar is activated, and there is something shows relevant list, otherwise hides it
    input.addEventListener("input", function() {
        if (this.value != "") {
            links.style.display = "block";
        } else {
            links.style.display = "none";
        }
    });
});

function toggleMenu() {
    const icon = document.querySelector('.icon');
    const mLinks = document.querySelector('.menuLinks');
    const styleDisp = getComputedStyle(mLinks).display;
    if (icon.textContent.trim() === "☰") {
        icon.textContent = '✕';
    } else {
        icon.textContent = "☰";
    }

    if (styleDisp === 'flex') {
        mLinks.style.display = 'none';
    } else {
        mLinks.style.display = 'flex';
    }
    icon.classList.toggle('open');
}