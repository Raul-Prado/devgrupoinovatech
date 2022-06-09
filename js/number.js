var numberaleatorio = "";
window.onload = function(){
    numberaleatorio = document.getElementById('numeroaleatorio').innerHTML = Math.floor(Math.random() * (9000 - 1000 + 1000)) + 1000;
}

function validar(){
    var nomeEmpresa = document.getElementById('txt_empresa').value;
    var ufEstado = document.getElementById('txt_estado').value;
    var nomeCidade = document.getElementById('txt_cidade').value;
    var nomeFunc = document.getElementById('txt_name').value;
    var cargo = document.getElementById('txt_cargo').value;
    var assunto = document.getElementById('txt_assu').value;
    var email = document.getElementById('txt_email').value;
    var telefone = document.getElementById('txt_tel').value;
    var texto = document.getElementById('txt_textarea1').value;
    var capturado = document.getElementById('numeroa').value;

    if(nomeEmpresa == "" || nomeEmpresa.length < 4){
        window.alert("Campo nome da empresa precisa ser preenchido corretamente");
        document.getElementById("txt_empresa").focus();
        return;
    }

    if(ufEstado == "" || ufEstado.length < 2){
        window.alert("Campo UF do Estado precisa ser preenchido corretamente ");
        document.getElementById("txt_estado").focus();
        return;
    }

    if(nomeCidade == "" || nomeCidade.length < 3){
        window.alert("Campo cidade precisa ser preenchido corretamente ");
        document.getElementById("txt_cidade").focus();
        return;
    }

    if(nomeFunc == "" || nomeFunc.length < 3){
        window.alert("Campo nome precisa ser preenchido corretamente");
        document.getElementById("txt_name").focus();
        return;
    }

    if(cargo == "" || cargo.length < 3){
        window.alert("Campo cargo precisa ser preenchido corretamente");
        document.getElementById("txt_cargo").focus();
        return;
    }

    if(assunto == "" || assunto.length < 3){
        window.alert("Assunto precisa ser preenchido corretamente");
        document.getElementById("txt_assu").focus();
        return;
    }

    if(email == "" || email.indexOf('@')==-1 || email.indexOf('.')==-1){
        window.alert("Campo E-mail precisa ser preenchido corretamente");
        document.getElementById("txt_email").focus();
        return;
    }

    if(telefone == "" || telefone.length < 10){
        window.alert("Campo telefone precisa ser preenchido corretamente");
        document.getElementById("txt_tel").focus();
        return;
    }

    if(texto == ""){
        window.alert("Campo mensagem precisa ser preenchido");
        document.getElementById("txt_textarea1").focus();
        return;
    }

    if (texto.length < 50 ){
        window.alert("É necessario preencher o campo MENSAGEM com mais de 50 caracteres!");
        document.getElementById("txt_textarea1").focus();
        return;
    }

    if(numberaleatorio != capturado || ""){
        window.alert("Os números inseridos não correspondem aos gerados ou Não foram preenchido " + numberaleatorio);
        document.getElementById("numeroa").focus();
        return;
    }
    ContatoForm.submit();
}

