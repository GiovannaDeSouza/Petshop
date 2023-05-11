//LOGIN

var email = 'admin@teste.com.br'

var senha = '!@#ABC123def'



function validandoDados() {
    let loginUsuario = document.getElementById('frm_email').value
    let loginSenha = document.getElementById('frm_telefone').value

    let erro = document.getElementById('div-erro')
    erro.innerHTML = ''
    erro.style.display = 'none'
    let campo = true;



    if (loginUsuario == email && loginSenha == senha) {
        window.location.replace("agendamentos.html");
    }

    else {
        erro.style.display = 'block';
        erro.textContent = 'O campo não pode estar vazio ou o email/senha estão errados!';
        formulario_login.frm_email.focus();
        campo = false;
        return false;
    }

}




