async function consultaCEP(cep) {
    try {
        const resultado = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const resultadoConvertido = await resultado.json()
        
        if (resultadoConvertido.erro) {
            alert('CEP de formato valido, porem inexistente')
        } else {
            //reconhecendo os inputs
            const inputRua = document.getElementById('endereco')
            const inputBairro = document.getElementById('bairro')
            const inputCidade = document.getElementById('cidade')
            const inputEstado = document.getElementById('uf')

            //atribuir os valores do resultado aos inputs
            inputRua.value = resultadoConvertido.logradouro
            inputBairro.value = resultadoConvertido.bairro
            inputCidade.value = resultadoConvertido.localidade
            inputEstado.value = resultadoConvertido.uf
            console.log(resultadoConvertido)
        }
    } catch (erro) {

        console.log(erro)
        alert('CEP de formato invalido')
    }


}

const inputCep = document.getElementById('cep')
inputCep.addEventListener('focusout', () => consultaCEP(inputCep.value))