var menu = document.getElementsByClassName('accordeon-menu__item');
for (i = 0; i < menu.length; i++) {
    menu[i].onclick = function () {
        for (u = 0; u < menu.length; u++) {
            if (this != menu[u]) menu[u].classList.remove('open');
        }
        this.classList.toggle('open')
    }
}

var btn = document.getElementsByClassName('accordeon-menu__list');
for (i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        for (u = 0; u < btn.length; u++) {
            if (this != btn[u]) btn[u].classList.remove('open');
        }
        this.classList.toggle('open')
    }
}