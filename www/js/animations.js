$(function() {

    // clicking in "info" icon
    $('#gofoodinfo').on('click', function() {

        // defining the user choice to use the image in the next screen
        let userChoice = $(".slick-active>div>div>img").attr("src");
        console.log(userChoice)

        // adding this style to the html to add the image
        $('head').append(
            `<style>
            .foodinfo-image {
                background: linear-gradient(to bottom, rgba(0, 0, 0, .7), transparent), url("${userChoice}");
                background-position: center;
            }
            </style>
            `)

            // also adding the title of the food here
            let userChoiceTitle = $(".slick-active>div>div>h2").text();
            $(".foodinfo > h2").text(userChoiceTitle);





            // adding the classes to animate to the other page
            $('.fooditem').addClass('toInfo-2');

            $('#name-main').removeClass('toMain-2');
            $('#name-main').addClass('toInfo-2');

            // First Motion - Menu buttons and bottom nav
            setTimeout(function() {
                $('.main-nav-bottom').removeClass('toMain');
                $('.main-nav-bottom').addClass('toInfo');

                $("#menu").removeClass('menu-to-info-reverse');
                $("#menu").addClass('menu-to-info');

                
                $("#goback").removeClass('goback-to-info-reverse');
                $("#goback").addClass('goback-to-info');
                $('#goback').css("display", "inline-block");
            }, 100);

            // Second Motion - Hiding the initial content
            setTimeout(function() {
                $('.main-section').css("display", "none");
                $('#name-main').css("opacity", "0");
            }, 250);

            // ------------------
            // MAKING INFO APPEAR
            // ------------------

            // Third Motion - Adding the foodinfo image, food info name
            setTimeout(function() {

                $('.foodinfo').css("display", "block")
                $('.foodinfo').addClass("foodinfo-anim-01")
            }, 250);
            $('.fooditem').removeClass('toMain-2');

            $(".foodinfo").removeClass("foodinfo-anim-reverse-01");

            $("#infobox1").removeClass("foodinfo-anim-reverse-02");
            $("#infobox2").removeClass("foodinfo-anim-reverse-02");
            $("#infobox3").removeClass("foodinfo-anim-reverse-02");
            $("#infobox4").removeClass("foodinfo-anim-reverse-02");

            // Fourth Motion - Showing the first box
            setTimeout(function() {

                $("#infobox1").addClass("foodinfo-anim-02")
                $('#infobox1').css("opacity", "1")
            }, 450);

            // Fifth Motion - Showing the second box
            setTimeout(function() {

                $("#infobox2").addClass("foodinfo-anim-02")
                $('#infobox2').css("opacity", "1")
            }, 550);

            // Sixth Motion - Showing the third box
            setTimeout(function() {

                $("#infobox3").addClass("foodinfo-anim-02")
                $('#infobox3').css("opacity", "1")
            }, 650);

            // Eighth Motion - Showing the fourth box
            setTimeout(function() {

                $("#infobox4").addClass("foodinfo-anim-02")
                $('#infobox4').css("opacity", "1")
            }, 750);
        })




        // ------------------
        // FROM INFO TO MAIN PAGE
        // ------------------

        $("#goback").on("click", function() {
            setTimeout(function() {
                // $(".main-section").css("display", "block");
                $(".foodinfo").css("display", "none");
            }, 700);
            setTimeout(function() {
                $(".foodinfo").removeClass("foodinfo-anim-01");
                $(".foodinfo").addClass("foodinfo-anim-reverse-01");
            },400);

            setTimeout(function() {
                $("#infobox1").removeClass("foodinfo-anim-02");
                $("#infobox1").addClass("foodinfo-anim-reverse-02");
                $('#infobox1').css("opacity", "0")
            }, 300);

            setTimeout(function() {
                $("#infobox2").removeClass("foodinfo-anim-02");
                $("#infobox2").addClass("foodinfo-anim-reverse-02");
                $('#infobox2').css("opacity", "0")
            }, 200);
            setTimeout(function() {
                $("#infobox3").removeClass("foodinfo-anim-02");
                $("#infobox3").addClass("foodinfo-anim-reverse-02");
                $('#infobox3').css("opacity", "0")
            }, 100);
            setTimeout(function() {
                $("#infobox4").removeClass("foodinfo-anim-02");
                $("#infobox4").addClass("foodinfo-anim-reverse-02");
                $('#infobox4').css("opacity", "0")
            }, 100);
            setTimeout(function() {
                $("#menu").removeClass('menu-to-info');
                $("#menu").addClass('menu-to-info-reverse');

                $("#goback").removeClass('goback-to-info');
                $("#goback").addClass('goback-to-info-reverse');
                setTimeout(function() {
                    $('#goback').css("display", "none");
                },380);
            }, 100);


            // GOING BACK TO MAIN

            setTimeout(function() {
                $('.fooditem').removeClass('toInfo-2');
                $('.fooditem').addClass('toMain-2');

                $('#name-main').removeClass('toInfo-2');
                $('#name-main').addClass('toMain-2');

                $('.main-nav-bottom').removeClass('toInfo');
                $('.main-nav-bottom').addClass('toMain');
            },600)

            setTimeout(function() {
                $('.main-section').css("display", "block");
                $('#name-main').css("opacity", "1");
            }, 610);
        })







        // MENU TRANSITION

        $("#menu").on("click", function() {
            $(".menu").toggleClass("menu-on")
            $("#menu").toggleClass("menu-icon-on")

            // changing the icon of the menue
            $("#menu").toggleClass("fa-bars")
            $("#menu").toggleClass("fa-arrow-left")

            // blocking other buttons to be clicked
            $(".main-section, .foodinfo").toggleClass("event-blocker");
            console.log("working");

            // animating the items in the menu
            $("#menu-items").toggleClass("menu-items-on")
            $("#menu-items").toggleClass("menu-items-off")
        });








    });
