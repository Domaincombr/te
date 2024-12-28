function esquerda(){
    const conteiner = document.querySelector(".conteiner-scroll");

    conteiner.scrollBy({
        left:200,
        behavior:"smooth"
    })
}
function direita(){
    const conteiner = document.querySelector(".conteiner-scroll");

    conteiner.scrollBy({
        left:-200,
        behavior:"smooth"
    })
}

const faqquadro = document.querySelectorAll(".faq-quadro");


faqquadro.forEach(item => {
    const question = item.querySelector(".faq");
    const responsta = item.querySelector(".responsta");

    question.addEventListener("click", () => {
        const isOpen = responsta.style.display === 'block';

    
        document.querySelectorAll(".responsta").forEach(a => a.style.display = 'none');

       
        responsta.style.display = isOpen ? 'none' : 'block';
    });
});
