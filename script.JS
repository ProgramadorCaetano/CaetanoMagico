

const btnIniciar = document.querySelector(".btn-continuar")
const btnSim = document.querySelector(".btn-sim")
const btnNao = document.querySelector(".btn-nao")
const texto = document.querySelector(".texto")
const texto2 = document.querySelector(".texto-2")
const texto3 = document.querySelector(".texto-3")
let numero = 0
let verifica = 0
console.log('numero =' + numero + '   verifica=' + verifica)

btnIniciar.addEventListener('click', verifica1)
btnSim.addEventListener('click', updateSim)
btnNao.addEventListener('click', updateNao)


function verifica1() {

    verifica = verifica + 1

    if (verifica == 5) {
        btnSim.style.visibility = 'hidden'
        btnNao.style.visibility = 'hidden'
        btnIniciar.style.visibility = 'visible'
        texto2.innerHTML = `${numero}`
        texto.innerHTML = "Você pensou no número :"
        numero = 0
        verifica = 0
        btnIniciar.textContent = 'Pensar outro'

    }else if(verifica < 5){
        tabela()
    btnSim.style.visibility = 'visible'
    btnNao.style.visibility = 'visible'
    btnIniciar.style.visibility = 'hidden'
    
    }

    

}

function updateSim() {
    btnSim.style.visibility = 'hidden'
    btnNao.style.visibility = 'hidden'
    if (verifica == 1) {
        numero = numero + 1
        texto2.innerHTML = ``
        texto.innerHTML = "Hummm.......Mentalizando..."
        
        setTimeout(() => { verifica1(); }, 2000)
    } else if (verifica == 2) {
        numero = numero + 2
        texto2.innerHTML = ``
        texto.innerHTML = "Hummm.......Mentalizando..."
        setTimeout(() => { verifica1(); }, 2000)
    } else if (verifica == 3) {
        numero = numero + 4
        texto2.innerHTML = ``
        texto.innerHTML = "Hummm.......Mentalizando..."
        setTimeout(() => { verifica1(); }, 2000)
    } else if (verifica == 4) {
        numero = numero + 8
        texto2.innerHTML = ``
        texto.innerHTML = "Hummm.......Mentalizando..."
        setTimeout(() => { verifica1(); }, 2000)
    }
}

function tabela() {
    if (verifica == 1) {
        
        texto.innerHTML = "O número que você pensou está na lista abaixo?"
        texto2.innerHTML = `1-3-5-7-9-11-13-15`

    } else if (verifica == 2) {
        texto.innerHTML = "O número que você pensou está na lista abaixo?"
        texto2.innerHTML = `2-3-6-7-10-11-14-15`

    } else if (verifica == 3) {
        texto.innerHTML = "O número que você pensou está na lista abaixo?"
        texto2.innerHTML = `4-5-6-7-12-13-14-15`

    } else if (verifica == 4) {
        texto.innerHTML = "O número que você pensou está na lista abaixo?"
        texto2.innerHTML = `8-9-10-11-12-13-14-15`

    }
}

function updateNao() {
    btnSim.style.visibility = 'hidden'
    btnNao.style.visibility = 'hidden'
    texto2.innerHTML = ``
    texto.innerHTML = "Hummm.......Mentalizando..."
    setTimeout(() => { verifica1(); }, 2000)
}

