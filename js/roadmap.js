$(document).ready(function() {
    var $isAnimatedSecond = $(".second .is-animated"),
        $isAnimatedSecondSingle = $(".second .is-animated__single"),
        $isAnimatedThird = $(".third .is-animated"),
        $isAnimatedThirdSingle = $(".third .is-animated__single"),
        $isAnimatedFourth = $(".fourth .is-animated"),
        $isAnimatedFourthSingle = $(".fourth .is-animated__single");

    var pagepiling = $("#pagepiling");

    AOS.init({
        easing: "ease-out-back",
    });
    pagepiling.pagepiling({
        menu: "#mainMenu, #mainMenu2",
        direction: "vertical",
        verticalCentered: true,
        sectionsColor: [],
        anchors: [
            "home",
            "history",
            "vision",
            "mission",
            "metamask",
            "roadmap",
            "services",
            "started",
            "ecosystem",
            // "plans",
            "counter",
        ],

        scrollingSpeed: 700,
        easing: "swing",
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            textColor: "#000",
            bulletsColor: "red",
            position: "right",
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: ".section",
        animateAnchor: true,

        //events
        afterRender: function() {
            // AOS.init();
        },
        afterLoad: function(anchorLink, index) {},

        onLeave: function(index, nextIndex, direction) {
            $(".animado1").hide(0);
            $(".animado1").removeClass("aos-init").removeClass("aos-animate");
            $(".animado2").hide(0);
            $(".animado2").removeClass("aos-init").removeClass("aos-animate");
            $(".animado3").hide(0);
            $(".animado3").removeClass("aos-init").removeClass("aos-animate");
            $(".animado4").hide(0);
            $(".animado4").removeClass("aos-init").removeClass("aos-animate");
            $(".animado5").hide(0);
            $(".animado5").removeClass("aos-init").removeClass("aos-animate");
            $(".animado6").hide(0);
            $(".animado6").removeClass("aos-init").removeClass("aos-animate");
            $(".animado7").hide(0);
            $(".animado7").removeClass("aos-init").removeClass("aos-animate");
            $(".animado8").hide(0);
            $(".animado8").removeClass("aos-init").removeClass("aos-animate");
            $(".animado9").hide(0);
            $(".animado9").removeClass("aos-init").removeClass("aos-animate");
            $(".animado10").hide(0);
            $(".animado10").removeClass("aos-init").removeClass("aos-animate");
            /*       $(".animado11").hide(0);
            $(".animado11").removeClass("aos-init").removeClass("aos-animate"); */
            if (nextIndex == 1) {
                $(".animado1").show(0);
                AOS.init({
                    easing: "ease-in-out-back",
                    duration: 1500,
                    once: true,
                    mirror: true,
                    anchorPlacement: "top-center",
                    offset: -1500,
                });
            }
            if (nextIndex == 2) {
                $(".animado2").show(0);
                AOS.init({
                    easing: "ease-in-out-back",
                    duration: 1500,
                    once: true,
                    mirror: true,
                    anchorPlacement: "top-center",
                    offset: -1500,
                });
            }
            if (nextIndex == 3) {
                $(".animado3").show(0);
                AOS.init({
                    easing: "ease-in-out-back",
                    duration: 1500,
                    once: true,
                    mirror: true,
                    anchorPlacement: "top-center",
                    offset: -1500,
                });
            }
            if (nextIndex == 4) {
                $(".animado4").show(0);
                AOS.init({
                    easing: "ease-in-out-back",
                    duration: 1500,
                    once: true,
                    mirror: true,
                    anchorPlacement: "top-center",
                    offset: -1500,
                });
            }
            if (nextIndex == 5) {
                $(".animado5").show(0);
                AOS.init({
                    easing: "ease-in-out-back",
                    duration: 1500,
                    once: true,
                    mirror: true,
                    anchorPlacement: "top-center",
                    offset: -1500,
                });
            }
            if (nextIndex == 6) {
                $(".animado6").show(0);
                AOS.init({
                    easing: "ease-in-out-back",
                    duration: 1500,
                    once: true,
                    mirror: true,
                    anchorPlacement: "top-center",
                    offset: -1500,
                });
            }
            if (nextIndex == 7) {
                $(".animado7").show(0);
                AOS.init({
                    easing: "ease-in-out-back",
                    duration: 1500,
                    once: true,
                    mirror: true,
                    anchorPlacement: "top-center",
                    offset: -1500,
                });
            }
            if (nextIndex == 8) {
                $(".animado8").show(0);
                AOS.init({
                    easing: "ease-in-out-back",
                    duration: 1500,
                    once: true,
                    mirror: true,
                    anchorPlacement: "top-center",
                    offset: -1500,
                });
            }
            if (nextIndex == 9) {
                $(".animado9").show(0);
                AOS.init({
                    easing: "ease-in-out-back",
                    duration: 1500,
                    once: true,
                    mirror: true,
                    anchorPlacement: "top-center",
                    offset: -1500,
                });
            }
            if (nextIndex == 10) {
                $(".animado10").show(0);
                AOS.init({
                    easing: "ease-in-out-back",
                    duration: 1500,
                    once: true,
                    mirror: true,
                    anchorPlacement: "top-center",
                    offset: -1500,
                });
            }
            /*  if (nextIndex == 11) {
              $(".animado11").show(0);
              AOS.init({
                easing: "ease-in-out-back",
                duration: 1500,
                once: true,
                mirror: true,
                anchorPlacement: "top-center",
                offset: -1500,
              });
            } */
        },
    });
    $('a.page-scroll').on('click', function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash),
                speed = $(this).data("speed") || 400;
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, speed);
            }
        }
    });
    let question = document.querySelectorAll(".question");

    question.forEach(question => {
        question.addEventListener("click", event => {
            const active = document.querySelector(".question.active");
            if (active && active !== question) {
                active.classList.toggle("active");
                active.nextElementSibling.style.maxHeight = 0;
            }
            question.classList.toggle("active");
            const answer = question.nextElementSibling;
            if (question.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }
        })
    })
});