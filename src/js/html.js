function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        filePath = elmnt.getAttribute("w3-include-html");
        if (filePath) {
            
            // var file = new File([filePath], "filename");

            // var reader = new FileReader();
            // reader.onload = function (e) {
            //     elmnt.innerHTML = e.target.result;
            //     elmnt.removeAttribute("w3-include-html");
            //     includeHTML();
            // };
            // reader.

            // return;

            window.open(filePath);
        }
    }
};

includeHTML();