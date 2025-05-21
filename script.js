function calculo() {
    var nome = document.getElementById('nome').value;
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    var sexo = '';
    var masculino = document.getElementById('masculino');
    var feminino = document.getElementById('feminino');

    if (masculino.checked) {
        sexo = masculino.value;
    } else if (feminino.checked) {
        sexo = feminino.value;
    }

    var imc = peso / (altura * altura);
    imc = imc.toFixed(2);

    var resultado = 'Olá, ' + nome + '! Seu IMC é: ' + imc + '. ';
 
    if (sexo === 'Masculino') {
        if (imc < 20.7) {
            resultado += 'Você está abaixo do peso.';
        } else if (imc >= 20.7 && imc <= 26.4) {
            resultado += 'Peso normal.';
        } else if (imc > 26.4 && imc <= 27.8) {
            resultado += 'Marginalmente acima do peso.';
        } else if (imc > 27.8 && imc <= 31.1) {
            resultado += 'Acima do peso ideal.';
        } else {
            resultado += 'Obesidade.';
        }
    } else if (sexo === 'Feminino') {
        if (imc < 19.1) {
            resultado += 'Você está abaixo do peso.';
        } else if (imc >= 19.1 && imc <= 25.8) {
            resultado += 'Peso normal.';
        } else if (imc > 25.8 && imc <= 27.3) {
            resultado += 'Marginalmente acima do peso.';
        } else if (imc > 27.3 && imc <= 32.3) {
            resultado += 'Acima do peso ideal.';
        } else {
            resultado += 'Obesidade.';
        }
    }

    document.getElementById('resultado').textContent = resultado;
}