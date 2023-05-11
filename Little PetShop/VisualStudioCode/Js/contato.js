function validarContato() {

    let erro = document.getElementById('erro');
    let campo = true;
    erro.style.display = 'none';

    //nome
    let nome = document.getElementById('frm_nome').value;
    if (nome.length < 3 || nome.length > 100) {
        erro.style.display = 'block';
        erro.textContent = 'O nome está muito curto ou muito longo';
        formulario.frm_nome.focus();
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
        formulario.frm_nome.focus();
        campo = false;
        return false;
    }

    //telefone
    let fone = document.getElementById('frm_telefone').value;
    var padraofone = /\((\d{2})\)\s(\d{4,5})-(\d{4})/;

    var result = padraofone.test(fone);
    if (result == false || fone.length < 1) {
        erro.style.display = 'block';
        erro.textContent = 'O telefone não é valido.';
        formulario.frm_nome.focus();
        campo = false;
        return false;
    }




    //mensagem
    let mns = document.getElementById('frm_mensagem').value;
    if (mns.length < 3 || mns.length > 100) {
        erro.style.display = 'block';
        erro.textContent = 'A mensagem está muito curta ou muito longa';
        formulario.frm_nome.focus();
        campo = false;
        return false;
    }

}