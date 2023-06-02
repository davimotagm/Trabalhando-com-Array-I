// ATIVIDADE 1
function valoresDoArray(palavra) {
    let arr = [palavra]
    console.log(arr)
}


// ATIVIDADE 2
function position(ind) {
    let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"];

    if (arr[ind]) {
        console.log(arr[ind])
    } else {
        console.log('Valor não encontrado')
    }
}


// ATIVIDADE 3
function sequencia(n) {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    if (arr[n] % 2 === 0) {
        console.log("O valor encontrado nesta posição é par")
    } else {
        console.log("O valor encontrado nesta posição é ímpar")
    }
}


// ATIVIDADE 4
function tamanho(user) {
    let maiorCaracteres = ""

    if (user.length > 1) {
        for (i = 0; i < user.length; i++) {
            if (user[i].length > maiorCaracteres.length) {
                maiorCaracteres = user[i]
            }
        }
        return console.log(`O nome ${maiorCaracteres} é o maior da lista`);
    } else {
        console.log('Apenas 1 valor')
    }
}

let word = ["Pedro", "Rafael", "José"]


// ATIVIDADE 5
function doisUltimos(lastTwo) {
    let soma = 0

    for (i = (lastTwo.length - 1); i >= (lastTwo.length - 2); i--) {
        soma += lastTwo[i];
    }

    if (soma % 2 === 0) {
        console.log('A soma é um múltiplo de 2');
    } else {
        console.log('A soma não é um múltiplo de 2');
    }
}

let numeros = [1, 4, 6, 9, 11, 8]


// ATIVIDADE 6
function search(names, name, position) {
    let selecionado = name.toLowerCase();
    let nomeNaPosicao = names[position].toLowerCase();

    if (nomeNaPosicao === selecionado) {
        console.log("Acertei")
    } else {
        console.log("Não é quem eu pensava")
    }
}

let names = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]


// ATIVIDADE 7
function list(one, two){
    let ultimoNumero = 0

    if (one.length > two.length){
        ultimoNumero = one[one.length - 1]
        return console.log(`A maior lista é a lista cujo último número é: ${ultimoNumero}`);
    } else if (one.length === two.length){
       ultimoNumero = "As listas têm o mesmo tamanho"
       return console.log(ultimoNumero);
    } else {
        ultimoNumero = two[two.length - 1]
        return console.log(`A maior lista é a lista cujo último número é: ${ultimoNumero}`);
    }
}

let numbers = [1,2,3,4,5,6,10,7]
let outrosNumeros = [5,7,9,4,2,3,9]


// RESULTADOS

console.log('---------- ATIVIDADE 1 ----------')
valoresDoArray('cascao');

console.log('---------- ATIVIDADE 2 ----------')
position(3);

console.log('---------- ATIVIDADE 3 ----------')
sequencia(9);

console.log('---------- ATIVIDADE 4 ----------')
tamanho(word);

console.log('---------- ATIVIDADE 5 ----------')
doisUltimos(numeros);

console.log('---------- ATIVIDADE 6 ----------')
search(names,'Carla', 3);

console.log('---------- ATIVIDADE 7 ----------')
list(numbers, outrosNumeros);




