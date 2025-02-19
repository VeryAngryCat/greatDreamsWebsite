function shuffleArray(array) {
    for(let i = array.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function randomiseLinks() {
    const container = document.querySelector('.linkList');
    const links = Array.from(container.getElementsByTagName('a'));
    return shuffleArray(links);
}

function distributeLinks(){
    const links = randomiseLinks();
    const linkMenu = document.querySelector('.linkList');
    
    links.forEach(link => {
        linkMenu.appendChild(link);
    });
}
window.onload = distributeLinks;