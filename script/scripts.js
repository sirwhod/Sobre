const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const bodyGit = document.querySelectorAll('.modal-content');


const github = fetch("https://raw.githubusercontent.com/sirwhod/Sobre/master/README.md").then(value => {
        bodyGit.innerHTML += value
}
)

for (let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')
    })
}

document.querySelector(".close-modal").addEventListener("click",function(){
    modalOverlay.classList.remove("active")
})
