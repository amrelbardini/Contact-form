$(document).ready(function ()
{
    //fadein a message on clicking the input field
    $(".header .box .text").on("click", function ()
    {
        $(".header .box .hint").fadeIn(1000);

    });
    //fadeout a message on clicking the password field
    $(".header .box .password").on("click", function () {
        $(".header .box .hint").fadeOut(1000);

    });



});