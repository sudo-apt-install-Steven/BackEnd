/*
09. Crie uma função que valide se uma senha atende aos
critérios estabelecidos, como ter no mínimo 8 caracteres, pelo
menos uma letra maiúscula, pelo menos uma letra minúscula e
pelo menos um caractere especial.
*/

import rl from 'readline-sync';

let senha = rl.questionNewPassword("\n\n\nDigite ma senha de no mínimo:\n       1. Um Caractere Maiúsculo \n       2. Um Caractere Minúsculo, \n       3. Um Caractere Especial, \n       4. 8 Caracteres ou mais. \n\n Por Favor Informe Sua Senha: ") // o questionNewPassowrd é para que o texto fique escondido (como: *****) e você irá precisar confirmar a senha.


function vldSenha(senha) {
    if (senha.length <= 8) {
        return "\n\n                A senha deve ter no mínimo 8 caracteres \n\n";
    }
    
    if (!/[A-Z]/.test(senha)) {
        return "\n\n                A senha deve conter pelo menos uma letra maiúscula \n\n";
    }
    
    if (!/[a-z]/.test(senha)) {
        return "\n\n                A senha deve conter pelo menos uma letra minúscula \n\n";
    }
    
    if (!/[!@#$%^&*()\-_=+[\]{}|;:'",.<>/?]/.test(senha)) {
        return "\n\n                A senha deve conter pelo menos um caractere especial \n\n";
    }
    
    return "\n\n\n              ---Senha válida---              \n\n\n";
}


console.log(vldSenha(senha));


/*
    comando para executar: node "Atividades/Exercício 33 .js"

    comando para suportar acentos: chcp 65001
*/