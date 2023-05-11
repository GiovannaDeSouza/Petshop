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