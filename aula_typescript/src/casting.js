"use strict";
//Não podemos ter o mesmo nome da varíavel em arquivos diferentes
//NAMESPACE: resolve o problema do mesmo nome da varíavel em arquivos diferentes
var casting;
(function (casting) {
    let idade = 47;
    idade.toFixed(); //trate a idaade como number //convertendo para number
    idade.length;
    console.log(idade);
    let nome = 70; //antes de mudar de number para string, usaremos o UNKNOWN
    console.log(nome);
})(casting || (casting = {}));
