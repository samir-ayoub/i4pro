$(document).ready(function () {
    $('#botao').click(function () {
        $('#buca').css('color', 'red');
    });

    $("#botao").animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
    }, 500);

    $('.navbar-collapse ul li a').on('click', function () {
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 5 }, 1000);
        return false;
    });
});

//function tariquete() {
//    document.getElementById("buca").style.color = "red";
//}