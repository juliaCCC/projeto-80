var names = [];

function sub() {
    var name = document.getElementById("name").value;
    names.push(name);
    var tamanho = names.length;
    document.getElementById("displayname").innerHTML = names;
}

function show() {
    var a = names.join("<br>");
    document.getElementById("p1").innerHTML = a;
}

function sortt() {
    names.sort();
    var a = names.join("<br>");
    document.getElementById("sort1").innerHTML = a;
}

function pesq() {
    var aux = document.getElementById("s1").value;
    var aux2 = 0;

    for(var i = 0; i < names.length; i++) {
        if (aux == names[i]){
            aux2++;
        }
    }
    document.getElementById("p2").innerHTML = "nome encontrado " + aux2 + " vezes";
}