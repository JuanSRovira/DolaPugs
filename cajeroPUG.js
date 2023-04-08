const usuario = localStorage.getItem('usuario')

const bienvenido = document.getElementById('bienvenido').innerHTML = `Bienvenido ${usuario}`

const dolaPugs = Number(localStorage.getItem('dolaPugs'))

const saldo = document.getElementById('saldo')

saldo.innerHTML = `Tu saldo disponible es: ${dolaPugs} DolaPugs`

function depositar(monto){
    if(dolaPugs <= 1999){
        let total = dolaPugs + monto
        localStorage.setItem('dolaPugs', total)
        saldo.innerHTML = `Tu saldo disponible es: ${dolaPugs}`
    }else{
        alert('Si tienes mas DolaPugs, hacienda abrira una carpeta de investigacion en tu contra!!!')
    }
}

const deposito = document.getElementById('deposito')

deposito.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    let inputDeposito = Number(document.getElementById('inputDeposito').value)
    depositar(inputDeposito)
})



function retirar (monto){
    if(dolaPugs >= 2){
        let total = dolaPugs - monto
        localStorage.setItem('dolaPugs', total)
        saldo.innerHTML = `Tu saldo disponible es: ${dolaPugs}`
    }else{
        alert('Ya no tienes DolaPUGS!!')
    }
}

const retiro = document.getElementById('retiro')

retiro.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    let inputRetiro = Number(document.getElementById('inputRetiro').value)
    retirar(inputRetiro)
})
