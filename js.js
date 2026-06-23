$( document ).ready(function() {


nameInvitado();
activateCounter();
activateTimeline();

let timerInterval = '';

timerInterval = setInterval(function() {
    activateCounter();
    const diffTime = new Date('2026-11-14T00:00:00') - new Date();
    if(diffTime <= 0){
        clearInterval(timerInterval);
    }
}, 1000);

function nameInvitado(){
    const params = new URLSearchParams(window.location.search);
    const nameInv = params.get('name');
    const tickets = params.get('tickets');
    $('#nameInvitado').text(nameInv);
    $('#TicketsNumber').text(tickets);
}
    

function activateCounter(){
    const diffTime = new Date('2026-11-14T00:00:00') - new Date();
    let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diffTime % (1000 * 60)) / 1000);    

    if (diffTime <= 0 && days >= -1) {
        $('main').addClass('DayInvite');        
        $('.DateInv-Counter-Title').text('¡Es Hoy!');
        explosionConfetti();
        
    }else{
        
        if(`${days}`.length === 1){
            days = `0${days}`
        }
        if(`${hours}`.length === 1){
            hours = `0${hours}`
        }
        if(`${minutes}`.length === 1){
            minutes = `0${minutes}`
        }
        if(`${seconds}`.length === 1){
            seconds = `0${seconds}`
        }

        $('.DateInv-Counter-Day').text(days);
        $('.DateInv-Counter-Hrs').text(hours);
        $('.DateInv-Counter-Min').text(minutes);
        $('.DateInv-Counter-Seg ').text(seconds);
    }

    if (days <= -2) {
        $('main').addClass('NextDayInvite');
        $('.DateInv-Counter-Title').text('Gracias por compartir este día conmigo');        
    }

}


function activateTimeline(){
    const actualPercent = Math.floor((new Date() - new Date('2026-05-14T00:00:00')) / (new Date('2026-11-14T00:00:00') - new Date('2026-05-14T00:00:00') ) * 100);

    const percent = Math.min(actualPercent, 100)
    $('.CounterLine').css('width', `${percent}%`)
}

})



