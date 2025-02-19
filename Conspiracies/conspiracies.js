function shuffleArray(array) {
    for(let i = array.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function randomiseLinks() {
    const container = document.getElementById('temp-link-storage');
    const links = Array.from(container.getElementsByTagName('a'));
    return shuffleArray(links);
}

function distributeLinks(){
    const links = randomiseLinks();
    const linkBar = document.querySelector('.linkBar');
    const linkMenu = document.querySelector('.sideLinkMenu');
    linkBar.appendChild(links[0]);
    linkBar.appendChild(links[1]);
    
    links.slice(2).forEach(link => {
        linkMenu.appendChild(link);
    });
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

window.onload = distributeLinks;