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
        tdImc.textContent = imc.toFixed(2); // Exibe o IMC com 2 casas decimais
    }
}

var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});
