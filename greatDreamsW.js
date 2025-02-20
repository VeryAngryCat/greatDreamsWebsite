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