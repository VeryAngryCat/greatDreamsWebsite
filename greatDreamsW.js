function preview() {
    //Code for previewing link content on all link pages.
}

function toggleMenu() {
    const icon = document.querySelector('.icon');
    const mLinks = document.querySelector('.menuLinks');
    const styleDisp = getComputedStyle(mLinks).display;
    if (icon.textContent === "☰") {
        icon.innerHTML = '&#10005;';
    } else {
        icon.innerHTML = '&#x2630;';
    }

    if (styleDisp === 'flex') {
        mLinks.style.display = 'none';
    } else {
        mLinks.style.display = 'flex';
    }
    icon.classList.toggle('open');
}