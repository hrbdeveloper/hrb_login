$(document).ready(function () {
    $('.checkboxs .squaredOne input[type=checkbox]').focus(function () {
        $(this).parent().parent().addClass('focus');
    });
    $('.checkboxs .squaredOne input[type=checkbox]').blur(function () {
        $(this).parent().parent().removeClass('focus');
    });

    $(".checkboxs .label").click(function () {
        $(this).parent().children(".squaredOne").children("input").click();
    });
    function delay() {
        setTimeout(function () {
            $(".loading_login").addClass("hide");
            $(".login_icon").addClass("stop");
            setTimeout(function () {
                $(".content_login").addClass("active");
                $(".login_icon.stop").addClass("userProf");
            },500)
        }, 2000);
    }

    if (document.readyState == 'complete') {
        delay();
    } else {
        document.onreadystatechange = function () {
            if (document.readyState === "complete") {
                delay();
            }
        }
    }
});
