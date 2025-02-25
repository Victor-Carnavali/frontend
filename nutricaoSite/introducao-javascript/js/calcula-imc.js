var titulo = document.querySelector(".titulo");
titulo.textContent = "Tabela Nutricao";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = parseFloat(tdPeso.textContent); // Converte o peso para número

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = parseFloat(tdAltura.textContent); // Converte a altura para número

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 20 || peso > 400) {
        pesoEhValido = false;
        tdImc.textContent = "Peso invalido";
        // add class to my js script
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0.5 || altura >= 3.0) {
        alturaEhValida = false;
        tdImc.textContent = "Altura invalida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida == true && pesoEhValido == true) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}