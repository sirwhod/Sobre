const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


for (let card of cards) {
    card.addEventListener("click", function(){
        const figmaID = card.getAttribute("id");
        //const nomeProjeto = card.getElementsByTagName("p");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.figma.com/embed?embed_host=share&url=${figmaID}chrome=DOCUMENTATION`
        //modalOverlay.querySelector("h1").innerHTML(`${nomeProjeto}`)
        //console.log(nomeProjeto);
    })
}

document.querySelector(".close-modal").addEventListener("click",function(){
    modalOverlay.classList.remove("active")
})

 