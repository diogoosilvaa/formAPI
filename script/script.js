
//const retorno = fetch('https://viacep.com.br/ws/06700222/json/') //requisiçao para API

/* .then(promessa => promessa.json()) //Convertendo a promessa para um arquivo json

    .then((resultado) => {
        if (resultado.erro === true) {
            alert('este CEP na existe!')
        } else {
            console.log(resultado)
            const inputBairro = document.getElementById('bairro')
            const inputRua = document.getElementById('logradouro')

            const selectEstado = document.getElementById('uf')



            selectEstado.value = resultado.uf

            inputRua.value = resultado.logradouro
            inputBairro.value = resultado.bairro

        }
    })

    .catch(erro => alert('cep com estrutura invalida')) * / / / Trabalhando o possivel erro


const inputCep = document.getElementById('cep') */


// Declarando a funçao
function consultaCEP(cep) {
    const requisicao = fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(promessa => promessa.json())

        .then((resultado) => {
            if (resultado.erro) {
                alert('CEP de formato valido, porem inexistente')
            } else {
                console.log(resultado)

                //reconhecendo os inputs
                const inputRua = document.getElementById('endereco')
                const inputBairro = document.getElementById('bairro')
                const inputCidade = document.getElementById('cidade')
                const inputEstado = document.getElementById('uf')

                //atribuir os valores do resultado aos inputs
                inputRua.value = resultado.logradouro
                inputBairro.value = resultado.bairro
                inputCidade.value = resultado.localidade
                inputEstado.value = resultado.uf

            }

        })
        .catch(erro => alert('CEP de formato invalido'))
        .finally(console.log('Processamento concluido!'))


    console.log(requisicao)

}

inputCep.addEventListener('focusout', () => consultaCEP(inputCep.value))



