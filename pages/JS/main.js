"use strict"

fetch("http://localhost:3000/fournisseur")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        console.log(data);
    });