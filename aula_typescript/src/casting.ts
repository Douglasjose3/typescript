//Não podemos ter o mesmo nome da varíavel em arquivos diferentes
//NAMESPACE: resolve o problema do mesmo nome da varíavel em arquivos diferentes
namespace casting {
    let idade: any = 47;
    (idade as number).toFixed(); //trate a idaade como number //convertendo para number
    (idade as string).length;
    console.log(idade);

    let nome: string = 70 as unknown as string //antes de mudar de number para string, usaremos o UNKNOWN
    console.log(nome);
}