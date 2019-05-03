"use strict"

function preload(){
    var json = $.getJSON("http://localhost:3000/fournisseur", function(json) {
        console.log(json);
        var iter = 0;
        json.forEach(element => {
            var texte1 = document.createTextNode(json[iter].nom);$
            var texte2 = document.createTextNode("Description : "+json[iter].description);$
            var texte3 = document.createTextNode("Adresse : "+json[iter].adresse);$
            var texte4 = document.createTextNode("Téléphone : "+json[iter].telephone);$

            var balise0 = document.createElement("a");
            balise0.setAttribute("href","infofournisseur.html?iter="+iter)
            var balise1 = document.createElement("div");
            balise1.className = "card";
            var balise2 = document.createElement("div");
            balise2.className = "cardhead";
            var balise3 = document.createElement("div");
            balise3.className = "cardbody";

            var balise4 = document.createElement("h3");
            balise4.className = "cardtitle";
            balise4.appendChild(texte1);
            var balise5 = document.createElement("p");
            balise5.className = "carddescription";
            balise5.appendChild(texte2);
            var balise6 = document.createElement("p");
            balise6.className = "cardadresse";
            balise6.appendChild(texte3);
            var balise7 = document.createElement("p");
            balise7.className = "cardtel";
            balise7.appendChild(texte4);

            balise2.appendChild(balise4)
            balise3.appendChild(balise5)
            balise3.appendChild(balise6)
            balise3.appendChild(balise7)

            balise1.appendChild(balise2)
            balise1.appendChild(balise3)
            balise0.appendChild(balise1)

            var allez = document.getElementById("div1");
            allez.appendChild(balise0);
            iter++;
        });
})}
preload()