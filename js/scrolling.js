window.addEventListener("scroll", function () {

        var pikseli = this.window.pageYOffset.valueOf();
        var opis = document.getElementById("opis");
        var pkr = this.document.getElementById("pkr");
        var tkr = this.document.getElementById("tkr");
        var l_d = this.document.getElementById("logo_description");

        if (pikseli >= 200) {
                opis.style.opacity = "1";
        } else {
                opis.style.opacity = "0";
        }
        if (pikseli >= 500) {
                pkr.style.opacity = "1";
        } else {
                pkr.style.opacity = "0";
        }
        if (pikseli >= 1000) {
                tkr.style.opacity = "1";
        } else {
                tkr.style.opacity = "0";
        }
        if (pikseli >= 1600) {
                l_d.style.opacity = "1";
        } else {
                l_d.style.opacity = "0";
        }
});

