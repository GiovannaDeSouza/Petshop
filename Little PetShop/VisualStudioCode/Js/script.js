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
        msg.textContent = 'O campo não pode estar vazio ou o email/senha estão errados!';
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
    let nome = document.getElementById('frm_nome').value;
    if (nome.length < 3 || nome.length > 100) {
        erro.style.display = 'block';
        erro.textContent = 'O nome está muito curto ou muito longo!';
        formulario_login.frm_id.focus();
        campok = false;
        return false;
    }

    //data


    //telefone
    let fone = document.getElementById('frm_tel').value;
    var padraofone = /\((\d{2})\)\s(\d{4,5})-(\d{4})/;

    var result = padraofone.test(fone);
    if (result == false || fone.length < 1) {
        erro.style.display = 'block';
        erro.textContent = 'O telefone não é valido.';
        formulario_login.frm_id.focus();
        campok = false;
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
        campok = false;
        return false;
    }

    //endereço
    let endereco = document.getElementById('frm_end').value
    if (endereco.length < 3 || endereco.length > 100) {
        erro.style.display = 'block';
        erro.textContent = 'O endereço está muito curto ou muito longo!';
        formulario_login.frm_id.focus();
        campok = false;
        return false;
    }

    //cidade
    let cidade = document.getElementById('frm_cid').value
    if (cidade.length < 3 || cidade.length > 50) {
        erro.style.display = 'block';
        erro.textContent = 'O nome da cidade está muito curto ou muito longo!';
        formulario_login.frm_id.focus();;
        campok = false;
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
        campok = false;
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
        campok = false;
        return false;
    }

    //nome do animal
    let dog = document.getElementById('frm_name').value
    if (dog.length < 3 || dog.length > 100) {
        erro.style.display = 'block';
        erro.textContent = 'O nome do pet está muito curto ou muito longo!';
        formulario_login.frm_id.focus();
        campok = false;
        return false;
    }




    //idade
    var ano = document.getElementById('frm_idade1').value;
    var mes = document.getElementById('frm_idade2').value;
    var dia = document.getElementById('frm_idade3').value;

    document.getElementById('frm_idadeF').value = ano + ' ano ' + mes+ ' meses ' + dia + ' dias ';
 



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

// dashboard /////////////////////////////////////////////////////////////

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharPizza);

function desenharPizza() {

    var data = google.visualization.arrayToDataTable(
        [
            ['Avaliações', 'Quantidade'],
            ['Boas avaliações', Math.random() * 100],
            ['Más avaliações', Math.random() * 100],
        ]
    );

    var options = {
        title: 'Avaliações',
        legend: { position: 'bottom' },
        slices: {
            0: { color: '#09A6A3' },
            1: { color: '#00CCBE' }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('pizza'));

    chart.draw(data, options);
}

// ======================================================================================================================================

google.charts.load('current', { 'packages': ['line'] });
google.charts.setOnLoadCallback(desenharLinha);

function desenharLinha() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Day');
    data.addColumn('number', 'Guardians of the Galaxy');

    data.addRows(
        [
            [1, Math.random() * 100],
            [2, Math.random() * 100],
            [3, Math.random() * 100],
            [4, Math.random() * 100],
            [5, Math.random() * 100],
            [6, Math.random() * 100],
            [7, Math.random() * 100],
            [8, Math.random() * 100],
            [9, Math.random() * 100],
            [10, Math.random() * 100]
        ]
    );

    var options = {
        legend: { position: 'none' },
        chart: {
            title: 'Agendamentos por dia'
        },
        colors: ['#00CCBE']
    };

    var chart = new google.charts.Line(document.getElementById('linha'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}

// ===============================================================================================================================

google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(desenharColuna);

function desenharColuna() {
    var data = new google.visualization.arrayToDataTable(
        [
        ['Serviços', 'Porcentagem', { role: "style" } ],
        ["Banho", Math.random().toFixed(2)*100, "#A9FDF3"],
        ["Tosa", Math.random().toFixed(2)*100, "#9EF3E4"],
        ["Adestramento", Math.random().toFixed(2)*100, "#5cf5de"],
        ["Veterinário", Math.random().toFixed(2)*100, "#0ccaba"],
        ["Passeio", Math.random().toFixed(2)*100, "#09A6A3"],
        ['Pet Sitter', Math.random().toFixed(2)*100, "#079ea6"]
        ]
    );

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);

    var options = {
        title: "Nossos serviços mais famosos",
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("coluna-1"));
    chart.draw(view, options);
}

// ============================================================================================================================

google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(desenharColunas);

function desenharColunas() {
    var data = google.visualization.arrayToDataTable(
        [
            ['Mês', 'Cadastros', 'Raça', 'Viralata'],
            ['Janeiro', Math.random() * 50, Math.random() * 50, Math.random() * 50],
            ['Fevereiro', Math.random() * 50, Math.random() * 50, Math.random() * 50],
            ['Março', Math.random() * 50, Math.random() * 50, Math.random() * 50],
            ['Abril', Math.random() * 50, Math.random() * 50, Math.random() * 50],
            ['Maio', Math.random() * 50, Math.random() * 50, Math.random() * 50]
        ]
    );

    var options = {
        chart: {
            title: 'Cadastros X Tipos de Pets',
        },
        colors:['#9EF3E4', '#00CCBE', '#09A6A3']
    };

    var chart = new google.charts.Bar(document.getElementById('coluna-2'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

function validarAgendamento(){
    let erro = document.getElementById('erro')
    erro.innerHTML = ''
    erro.style.display = 'none'
    let msg = document.getElementById('erro')
    let campok = true;

    let cliente = document.getElementById('frm-nome').value
    if (cliente.length < 3 || cliente.length > 100) {
        erro.style.display = 'block';
        erro.textContent = 'O nome do pet está muito curto ou muito longo!';
        formulario_login.frm_id.focus();
        campok = false;
        return false;
    }

    let pet = document.getElementById('frm-pet').value
    if (pet.length < 3 || pet.length > 100) {
        erro.style.display = 'block';
        erro.textContent = 'O nome do pet está muito curto ou muito longo!';
        formulario_login.frm_id.focus();
        campok = false;
        return false;
    }

}

