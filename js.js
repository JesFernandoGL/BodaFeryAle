$( document ).ready(function() {


nameInvitado();
activateCounter();
activateTimeline();
animationsInit();
eventsMenu();

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

function animationsInit(){
    
      secBabys = new WOW(
        {
        boxClass:     'SectionNames-Inv-Wrapp',      // default
        animateClass: 'animate__fadeInUp', // default
        offset:       200,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      secdate = new WOW(
        {
        boxClass:     'Section-Date-Wrapp',      // default
        animateClass: 'animate__fadeInUp', // default
        offset:       200,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      counter = new WOW(
        {
        boxClass:     'DateInv-CounterWrapp',      // default
        animateClass: 'animate__fadeInUp', // default
        offset:       200,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      sectionIglesia = new WOW(
        {
        boxClass:     'SectionIglesia',      // default
        animateClass: 'animate__fadeInUp', // default
        offset:       200,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      ) 

      sectionSalon = new WOW(
        {
        boxClass:     'SectionRecepcion',      // default
        animateClass: 'animate__fadeInUp', // default
        offset:       200,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      ) 

      secBabys.init();
      secdate.init();
      counter.init();
      sectionIglesia.init();
      sectionSalon.init();

}

function eventsMenu(){
    $('.MenuInv-Btn').click(function(){
        $('.MenuInv-Btn').removeClass('MenuBtn-Active');
        $(this).addClass('MenuBtn-Active');

        const el = $(this).attr('data-section');

        $('html, body').animate({
            scrollTop: $(`.${el}`).offset().top
        }, 1000);
    });
}

})



