"use strict"

fetch("http://localhost:3000/fournisseur")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        console.log(data);
        var i=0;
        data.forEach(element => {
            var h = document.createElement("h1");
            var t = document.createTextNode(data[i].nom);
            h.appendChild(t);
            document.body.appendChild(h);
            i++;
        });
        document.getElementsByTagName("h1").addClass("prout");
    });



    var header = document.querySelector('header');
