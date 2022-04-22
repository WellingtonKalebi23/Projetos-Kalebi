function calcularPeso() {
    // criar referencia aos elementos manipulados pela func
    var inNome = document.getElementById("inNome");
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminino = document.getElementById("rbFeminino");
    var inAltura = document.getElementById("inAltura");
    var outResposta = document.getElementById("outResposta");

    // obtem o conteudo dos campos de edição da página
    var nome = inNome.value; 
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;
    var altura = Number(inAltura.value);

    // verifica se nome foi preenchido e sexo selecionado
    if ( nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, infome o nome e selecione o sexo...");
        inNome.focus();  // posiciona (joga o foco) no campo de edição inNome
        return;
    }

    
}