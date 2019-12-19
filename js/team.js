var team = document.getElementsByClassName('accordeon-team__item');
for (i = 0; i < team.length; i++) {
    team[i].onclick = function () {
        for (u = 0; u < team.length; u++) {
            if (this != team[u]) team[u].classList.remove('open');
        }
        this.classList.toggle('open')
    }
}