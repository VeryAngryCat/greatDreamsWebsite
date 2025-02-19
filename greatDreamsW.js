function preview() {
    //Code for previewing link content on all link pages.
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