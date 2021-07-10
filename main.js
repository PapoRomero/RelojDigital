function ActualizarHora(){
    var fecha = new Date();
    var segundos = fecha.getSeconds();
    var minutos = fecha.getMinutes();
    var horas = fecha.getHours();
    var anio = fecha.getFullYear();
    var mes = fecha.getMonth();
    var dia = fecha.getDate();
    var dia_mes = fecha.getDay();

    var elementoHoras = document.getElementById("pHoras");
    var elementoMinutos = document.getElementById("pMinutos");
    var elementoSegundos = document.getElementById("pSegundos");
    var pSaludo = document.getElementById("saludito");
    var elementoAnio = document.getElementById("anio");
    var elementoMes = document.getElementById("mes");
    var elementoDia = document.getElementById("dia");
    var diasemana = document.getElementById("diaSemana");

    elementoHoras.textContent = horas;
    elementoMinutos.textContent = minutos;
    elementoSegundos.textContent = segundos;
    elementoAnio.textContent = anio;
    elementoDia.textContent = dia;

    if (horas >= 0 && minutos >= 1 && horas < 12){
        pSaludo.textContent = "Buenos Días";
    }
    if (horas >= 12 && minutos >= 1 && horas < 19){
        pSaludo.textContent = "Buenas Tardes";
    }
    if (horas >= 19 && minutos >= 1){
        pSaludo.textContent = "Buenas Noches";
    }

    var semana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes',
    'Sábado'];
    var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio',
    'Agosto','Septiembre','Octubre','Noviembre','Diciembre',];

    diasemana.innerHTML=semana[dia_mes];
    elementoMes.innerHTML=meses[mes];
}

setInterval(ActualizarHora,1000);