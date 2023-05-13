//////////////////////////////////////////////////////////////////////
//CADASTRO 

function validarDados() {

    let erro = document.getElementById('erro');
    let campo = true;
    erro.style.display = 'none';


    //id
    let id = document.getElementById('frm_id').value;

    if (id < 0 || id.length < 1) {
        erro.style.display = 'block';
        erro.textContent = 'O numero não pode ser negativo!';
        formulario_login.frm_id.focus();
        campo = false;
        return false;
    }

    //nome
    let nome = document.getElementById('frm_nome').value;
    if (nome.length < 3 || nome.length > 100) {
        erro.style.display = 'block';
        erro.textContent = 'O nome está muito curto ou muito longo';
        formulario_login.frm_id.focus();
        campo = false;
        return false;
    }

    //data
    let datinha = document.getElementById('frm_data').value;

    if (datinha.trim() == '') {
        erro.style.display = 'block';
        erro.textContent ='Selecione a data de seu nascimento';
        formulario.frm_hora.focus();
        campo = false;
        return false;
    }


    //telefone
    let fone = document.getElementById('frm_tel').value;
    var padraofone = /\((\d{2})\)\s(\d{4,5})-(\d{4})/;

    var result = padraofone.test(fone);
    if (result == false || fone.length < 1) {
        erro.style.display = 'block';
        erro.textContent = 'O telefone não é valido.';
        formulario_login.frm_id.focus();
        campo = false;
        return false;
    }

    //e-mail
    let mail = document.getElementById('frm_email').value;
    var padraoEmail = /^[\w-\.]+@([a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3})$/

    var emailValido = padraoEmail.test(mail);
    if (emailValido == false || mail.length < 1) {
        erro.style.display = 'block';
        erro.textContent = 'O e-mail não é valido.';
        formulario_login.frm_id.focus();
        campo = false;
        return false;
    }

    //endereço
    let endereco = document.getElementById('frm_end').value
    if (endereco.length < 3 || endereco.length > 100) {
        erro.style.display = 'block';
        erro.textContent = 'O endereço está muito curto ou muito longo!';
        formulario_login.frm_id.focus();
        campo = false;
        return false;
    }

    //cidade
    let cidade = document.getElementById('frm_cid').value
    if (cidade.length < 3 || cidade.length > 50) {
        erro.style.display = 'block';
        erro.textContent = 'O nome da cidade está muito curto ou muito longo!';
        formulario_login.frm_id.focus();;
        campo = false;
        return false;
    }

    //UF
    let UF = document.getElementById('frm_sigla').value
    var padraoUF = /[A-Z]{2}/;

    var UFValido = padraoUF.test(UF);
    if (UFValido == false || UF.length < 2 || UF.length > 2) {
        erro.style.display = 'block';
        erro.textContent = 'O estado deve conter 2 carácteres com letras maiúsculas.';
        formulario_login.frm_id.focus();
        campo = false;
        return false;
    }

    //senha 
    let senha = document.getElementById('frm_senha').value
    var padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/;

    var resultado = padraoSenha.test(senha);
    if (resultado == false) {
        erro.style.display = 'block';
        erro.textContent = 'A senha deve conter letras Maiúsculas, letras minúsculas, números e caracteres especiais.';
        formulario_login.frm_id.focus();
        campo = false;
        return false;
    }

    //nome do animal
    let dog = document.getElementById('frm_name').value
    if (dog.length < 3 || dog.length > 100) {
        erro.style.display = 'block';
        erro.textContent = 'O nome do pet está muito curto ou muito longo!';
        formulario_login.frm_id.focus();
        campo = false;
        return false;
    }


    //idade
    var ano = document.getElementById('frm_idade1').value;
    var mes = document.getElementById('frm_idade2').value;
    var dia = document.getElementById('frm_idade3').value;

    document.getElementById('frm_idadeF').value = ano + ' ano ' + mes + ' meses ' + dia + ' dias ';

}


function outros10() {
    //tipo
    let tipo = document.getElementById('frm_raca').value;
    var outros1 = document.getElementById('outros');
    var titulo = document.getElementById('frm_outros');
    console.log(tipo);


    if (tipo == "outros") {
        outros1.style.display = 'block';
        titulo.style.display = 'block';
    }
    else {
        outros1.style.display = 'none';
        titulo.style.display = 'none';
    }
}
