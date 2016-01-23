window.onload = function() {
    var age = ~~((Date.now() - new Date(1996, 2, 1)) / 31557600000);
    document.getElementById("age").innerHTML = age;

    var chameleons = document.getElementsByClassName("chameleon");
    var angles = [0, 30, 180, 330];
    var shades = [1.0, 0.5, 0.7, 0.8];
    var baseHue = Math.floor(Math.random() * 360);
    var light = Math.floor(Math.random() * (80 - 60)) + 60;
    var s = String(Math.floor(Math.random() * (80 - 30)) + 30) + "%";
    var draw = function(hue) {
        for (var i = 0; i < chameleons.length; i++) {
            var h = Math.floor(hue + angles[i]) % 360;
            var l = String(Math.floor(light * shades[i])) + "%";
            var hsl = "hsl(" + h + "," + s + "," + l + ")";
            chameleons[i].setAttribute("fill", hsl);
        }
    }
    draw(baseHue);

    var locked = false;
    var hue = baseHue;
    window.addEventListener("scroll", function() {
        if (locked) return;
        locked = true;
        setTimeout(function() {
            hue = (hue + 3) % 360;
            draw(hue);
            locked = false;
        }, 25);
    });
}
