document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();


    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    var message = 'Lembrete de Agendamento.%0A%0A';
    message += 'Nome: ' + encodeURIComponent(name) + '%0A';
    message += 'Telefone: ' + encodeURIComponent(phone) + '%0A';
    message += 'Data: ' + encodeURIComponent(date) + '%0A';
    message += 'Hora: ' + encodeURIComponent(time) + '%0A';

    var whatsappLink = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(phone) + '&text=' + message;
    window.open(whatsappLink, '_blank');
});

document.getElementById('form-group').addEventListener('submit', function(event) {
    event.preventDefault();


    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    var message = 'Lembrete de Agendamento.%0A%0A';
    message += 'Nome: ' + encodeURIComponent(name) + '%0A';
    message += 'Telefone: ' + encodeURIComponent(phone) + '%0A';
    message += 'Data: ' + encodeURIComponent(date) + '%0A';
    message += 'Hora: ' + encodeURIComponent(time) + '%0A';

    var whatsappLink = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(phone) + '&text=' + message;
    window.open(whatsappLink, '_blank');
});
