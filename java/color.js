const botao = [...document.querySelectorAll(".teste")]

// botao.map((el) => {
//     el.addEventListener("click",  (evt) => {
//         el.classList.add("destaque")
        
//     el.addEventListener("click", (evt) => {
//         el.classList.remove("destaque")
//         })
//     })
    
// })
function repeticao(rep) {
    let repete = 0
    const botao = [...document.querySelectorAll(".teste")]
    while (repete == 10) {
        if (repete == 3) {
            function repet (botao ){
                botao.addEventListener("click",  (evt) => {
                    botao.classList.add("destaque")
                    
                botao.addEventListener("click", (evt) => {
                    botao.classList.remove("destaque")
                    })
                }) 
        }

        repete ++
    }
    repet()
}
}

repeticao()