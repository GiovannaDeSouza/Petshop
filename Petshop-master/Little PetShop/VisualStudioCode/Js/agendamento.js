//agendamento
function validarAgendamento() {
    let erro = document.getElementById('erro')
    erro.innerHTML = ''
    erro.style.display = 'none'
    let campo = true;

    //Nome do cliente
    let nome = document.getElementById('frm_nome').value
    if (nome.length < 3 || nome.length > 100) {
        erro.style.display = 'block';
        erro.textContent = 'O nome está muito curto ou muito longo.';
        formulario.frm_nome.focus();
        campo = false;
        return false;
    }

    //nome do pet
    let pet = document.getElementById('frm_pet').value
    if (pet.length < 3 || pet.length > 100) {
        erro.style.display = 'block';
        erro.textContent = 'O nome do pet está muito curto ou muito longo';
        formulario.frm_nome.focus();
        campo = false;
        return false;
    }

    //data
    let datinha = document.getElementById('frm_data').value;

    if (datinha.trim() == '') {
        erro.style.display = 'block';
        erro.textContent ='Escolha uma data para o atendimento';
        formulario.frm_hora.focus();
        campo = false;
        return false;
    }



    //horario
    let hora = document.getElementById('frm_hora').value;
    let padraoH = /\d{2}/;
    var HoraC = padraoH.exec(hora);

    if (hora.trim() == '') {
        erro.style.display = 'block';
        erro.textContent ='Escolha um horário';
        formulario.frm_hora.focus();
        campo = false;
        return false;
    }

    if (HoraC[0] < 8 || HoraC[0] > 18) {
        erro.style.display = 'block';
        erro.textContent = 'O horário é inválido, agendamentos apenas das 8:00 às 18:00';
        formulario.frm_hora.focus();
        campo = false;
        return false;
    }

    if(campo==true){
        erro.style.display = 'block';
        erro.textContent ='Seu agendamento foi feito, muito obrigada!';
        tabelinha();
    }
}

function tabelinha() {
    let nome = document.getElementById('frm_nome').value;
    let pet = document.getElementById('frm_pet').value;
    let servico = document.getElementById('frm_servico').value
    let data = document.getElementById('frm_data').value;
    let hora = document.getElementById('frm_hora').value;
    let pag = document.getElementById('frm_pagamento').value

    let tabela = document.getElementById('tabelinha');
    tabela.style.display = 'block';
    let linhas = document.getElementById('linhas');
    console.log(linhas);
    linhas.innerHTML += '<tr><td>' + nome + '</td><td>' + pet + '</td><td>' + servico + '</td><td>' + data + '</td><td>' + hora + '</td><td>' + pag +'</td></tr>';
}
