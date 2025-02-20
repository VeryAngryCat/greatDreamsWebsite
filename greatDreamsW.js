function search() {
    var input, list, ul, li, a, i, txtValue;
    input = document.querySelector('.input');
    list = input.value.toUpperCase();
    ul = document.querySelector('.linkList');
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(list) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
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