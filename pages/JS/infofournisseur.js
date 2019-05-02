function getfourni() {
    var json = $.getJSON("http://localhost:3000/fournisseur/id:1", function(json) {
        console.log(json);
})}
getfourni()