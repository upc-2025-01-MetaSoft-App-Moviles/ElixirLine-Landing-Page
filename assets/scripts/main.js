(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
            logo.src = 'assets/images/logo/logo_Elexir_color_lat.svg';
        } else {
            header_navbar.classList.remove("sticky");
            logo.src = 'assets/images/logo/logo_Elexir_white_lat.svg';
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });

    /*
    async function setLanguage(lang) {
        const response = await fetch(`assets/languages/lang-${lang}.json`);
        const translations = await response.json();

        for (const key in translations) {
            const element = document.getElementById(key);
            if (element) {
                if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                    element.placeholder = translations[key];
                } else {
                    element.innerText = translations[key];
                }
            }
        }
        localStorage.setItem("language", lang);
    }

    window.addEventListener('DOMContentLoaded', () => {
        const savedLang = localStorage.getItem('language') || 'en';
        setLanguage(savedLang);
    });

    window.setLanguage = setLanguage;
*/

})();
