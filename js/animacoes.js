/* -- Efeitos/Animações -- */

/* Carro do lado do formulário */

$("#imagem1").mouseenter(function() {
    $(this).animate({zoom: '110%'}, "slow");
    $(".form-secao-1").fadeOut(300);
})

$("#imagem1").mouseout(function() {
    $(this).animate({zoom: '100%'}, "slow");
    $(".form-secao-1").fadeIn(300);
})

/* Outros modelos */

$("#div-tabela").hide();

$("#outras").click(function(){
    $("#div-tabela").show();
    $('html, body').animate({ scrollTop: $('#div-tabela').offset().top }, 'slow');
})