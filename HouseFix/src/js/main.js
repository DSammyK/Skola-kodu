/*
var button = document.querySelector("#button");
var modal = document.querySelector("#modal");
var close = document.querySelector("#close");

button.addEventListener("click", function(){
    modal.classList.add("modal_active");
});

close.addEventListener("click", function(){
    modal.classList.remove("modal_active");
});
*/

$(document).ready(function(){

    //napojenie knihovny wow.js
    new WOW().init();

    var button = $("#button");
    var modal = $("#modal");
    var close = $("#close");

    button.on("click", function(){
        modal.addClass("modal_active");
    });

    close.on("click", function(){
        modal.removeClass("modal_active");
    });    


    //Validace Formulára

    $("#brief-form").validate({
      rules: {
        username: "required",
        phone: "required"
      },
      messages: {
        username: "Uveďte vaše meno",
        phone: "Potrebujeme váše telefónne číslo"
      }
    })

    $("#offer-form").validate({
      rules: {
        username: "required",
        phone: "required"
      },
      messages: {
        username: "Uveďte vaše meno",
        phone: "Potrebujeme váše telefónne číslo"
      }
    })

    //napojenie slideru
    $(".slider").slick({
        slidesToShow: 3,
        prevArrow: $(".arrows__left"),
        nextArrow: $(".arrows__right"),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });

});