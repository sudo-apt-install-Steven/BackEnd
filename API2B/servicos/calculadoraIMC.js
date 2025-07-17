function efetuarCalculoIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}



function retornaStatusIMC(imc)
{
    let status;

    if(imc < 18.5)
    {
        status = 'Abaixo do peso';
    }
    else if (imc >= 18.5 && imc < 24.9)
    {
        status = 'Normal';
    }
    else if (imc >= 24.9 && imc < 30)
    {
        status ='Acima do peso'
    }
    else
    {
        status = 'Obeso';
    }

    return status;
}

function validaParametro(parametro)
{
    if(parametro){
        if (isNaN(parametro))
        {
            return false;
        }
        else 
        {
            return true;
        }
    }
    else {
        return false
    }
}

export {efetuarCalculoIMC, retornaStatusIMC, validaParametro};

// comando (terminal do VScode) para executar:          node API2B\index.js
// Link: http://localhost:8080/             Exemplo:    
//usar o Postman para testar.http://localhost:8080/?peso=54&altura=1.70