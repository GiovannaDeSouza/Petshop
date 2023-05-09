//var padraoM = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//var padraoS = /^(?=.\d)(?=.[A-Z])(?=.[a-z])(?=.[@#$%?!]).{8,}$/;
//LOGIN

var email = 'admin@teste.com.br'

var senha = '!@#ABC123def'



function validandoDados() {
    let loginUsuario = document.getElementById('frm_email').value
    let loginSenha = document.getElementById('frm_telefone').value

    let erro = document.getElementById('div-erro')
    erro.innerHTML = ''
    erro.style.display = 'none'
    let msg = document.getElementById('div-erro')
    let campok = true;

    if (loginUsuario == email && loginSenha == senha) {
        window.location.replace("agendamentos.html");
    }

    else {
        erro.style.display = 'block';
        msg.textContent = 'O campo nome não pode estar vazio ou o email/senha estão errados!';
        formulario_login.frm_email.focus();
        campok = false;
        return false;
    }

}
//////////////////////////////////////////////////////////////////////
//CADASTRO 

function validarDados() {

    let erro = document.getElementById('erro');

    let campok = true;
    erro.style.display = 'none';


    //id
    let id = document.getElementById('frm_id').value;

    if (id < 0 || id.length < 1) {
        erro.style.display = 'block';
        erro.textContent = 'O numero não pode ser negativo!';
        formulario_login.frm_id.focus();
        campok = false;
        return false;
    }

    //nome
    let nome = document.getElementById('frm_nome').value
    if (nome.length < 3 || nome.length > 100) {
        erro.style.display = 'block';
        erro.textContent = 'O nome está muito curto ou muito longo!';
        formulario_login.frm_nome.focus();
        campok = false;
        return false;
    }

    //endereço
    let endereco = document.getElementById('frm_end').value
    if (endereco.length < 3 || endereco.length > 100) {
        erro.style.display = 'block';
        erro.textContent = 'O endereço está muito curto ou muito longo!';
        formulario_login.frm_end.focus();
        campok = false;
        return false;
    }

    //senha 
    let senha = document.getElementById('frm_senha').value
    var padraoSenha =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/;

    var resultado = padraoSenha.test(senha);
    console.log(resultado);
    if (resultado == false ) {
        erro.style.display = 'block';
        erro.textContent = 'A senha deve conter letras Maiúsculas, letras minúsculas, números e caracteres especiais.';
        formulario_login.frm_senha.focus();
        campok = false;
        return false;
    }
        
    

}


