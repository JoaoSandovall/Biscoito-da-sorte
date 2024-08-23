document.addEventListener("DOMContentLoaded", function() {
    const home = document.getElementById("home");
    const luck = document.getElementById("luck");
    const biscoito = home.querySelector("img");
    const fortuneMessage = luck.querySelector("h2");
    const openAnotherButton = luck.querySelector("button");

    const fortunes = [
        "Hoje é seu dia de sorte!",
        "Você é do tamanho do seu sonho.",
        "A maior de todas as torres começa no solo.",
        "A paciência é uma virtude.",
        "Nem tudo que reluz é ouro.",
        "Algo incrível vai acontecer em breve.",
        "Cuidado com decisões impulsivas.",
        "A sorte está ao seu lado hoje.",
        "Um novo desafio te espera.",
        "Confie em si mesmo.", 
        "Nós somos o que pensamos."
    ];

    biscoito.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        fortuneMessage.textContent = fortunes[randomIndex];
        
        home.classList.remove("show");
        home.classList.add("hide");
        luck.classList.remove("hide");
        luck.classList.add("show");
    });

    openAnotherButton.addEventListener("click", function() {
        luck.classList.remove("show");
        luck.classList.add("hide");
        home.classList.remove("hide");
        home.classList.add("show");
    });
});