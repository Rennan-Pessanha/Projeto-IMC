

function botao() { 
var nome = document.getElementById("nome").value
var altura = document.getElementById("alt").value
var peso = document.getElementById("peso").value
var resp = document.getElementById("res")

const IMC = (peso /(altura * altura)).toFixed(1)

if (nome.length == 0 || altura.length == 0 || peso.length == 0) { 
    resp.innerHTML = "<p>Por favor, preencha todas as lacunas. </p>"
}
else if (IMC < 18.5) { 
    resp.innerHTML = `${nome} seu IMC é ${IMC} e você está Abaixo do peso.`
}
else if (IMC >= 18.5 && IMC <= 24.9 ) {
    resp.innerHTML = `${nome} seu IMC é ${IMC} e você está com peso normal.`
}
else if (IMC > 25 && IMC <= 29.9) { 
 resp.innerHTML = `${nome} seu IMC é ${IMC} e você está com sobre peso.`
}

else { 
    resp.innerHTML = `${nome} seu IMC é ${IMC}, e você está obeso. Procure um profissional da saúde :/`
}

}