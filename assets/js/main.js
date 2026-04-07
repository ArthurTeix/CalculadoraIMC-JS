function calculoImc(e){
    e.preventDefault()
    console.log('oi')

    const peso = Number(form.querySelector('#peso').value)
    const altura = Number(form.querySelector('#altura').value)

    const imc = peso / (altura ** 2)

    if (altura == false && peso == false) {
        resultado.innerHTML = `<p>DIGITE ALTURA E PESO</p>`
    } else if (altura >= 0 && peso == false) {
        resultado.innerHTML = `<p>DIGITE SEU PESO</p>`
    } else if (altura == false && peso >= 0){
        resultado.innerHTML = `<p>DIGITE SUA ALTURA</p>`
    } else if (imc < 18.5){
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)</p>`
    } else if (imc >= 18.5 && imc <= 24.99){
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`
    } else if (imc >= 25 && imc <= 29.99){
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</p>`
    } else if (imc >= 30 && imc <= 34.99) {
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</p>`
    } else if (imc >= 35 && imc <= 39.99) {
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</p>`
    } else if (imc > 40) {
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)</p>`
    }
    
}

const form = document.querySelector('.form')
const resultado = document.querySelector('.resultado')

form.addEventListener('submit', calculoImc)