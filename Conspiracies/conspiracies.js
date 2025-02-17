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
    const shuffled = shuffleArray(links);
    container.innerHTML = '';
    shuffled.forEach(link => {
        container.appendChild(link);
    });
}

window.onload = randomiseLinks;