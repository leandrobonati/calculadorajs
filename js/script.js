
function soma() {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

    var num1 = parseFloat(num1)
    var num2 = parseFloat(num2)

    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        document.getElementById('resultado').innerText = 'Insira uma nota válida';
        document.getElementById('resultado').style.color = 'black';
        return;
    }
    var soma = num1 + num2
    document.getElementById('resultado').innerText = soma
    document.getElementById('resultado').style.color = 'black';

}

function subtrair(){
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

    var num1 = parseFloat(num1)
    var num2 = parseFloat(num2)

    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        document.getElementById('resultado').innerText = 'Insira uma nota válida';
        return;
    }
    var subtrair = num1 - num2
    document.getElementById('resultado').innerText = subtrair
    document.getElementById('resultado').style.color = 'black';
}

function multiplicar(){
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

    var num1 = parseFloat(num1)
    var num2 = parseFloat(num2)

    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        document.getElementById('resultado').innerText = 'Insira uma nota válida';
        return;
    }
    var multiplicar = num1 * num2
    document.getElementById('resultado').innerText = multiplicar
    document.getElementById('resultado').style.color = 'black';
}

function dividir(){
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

    var num1 = parseFloat(num1)
    var num2 = parseFloat(num2)

    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        document.getElementById('resultado').innerText = 'Insira uma nota válida';
        return;
    }
    var dividir = num1 / num2
    document.getElementById('resultado').innerText = dividir
    document.getElementById('resultado').style.color = 'black';
}


