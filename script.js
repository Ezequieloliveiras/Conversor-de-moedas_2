
const url = 'https://economia.awesomeapi.com.br/last/'
const coins = 'USD-BRL,EUR-BRL'
const resultado = document.querySelector('#resultado')
const botao = document.querySelector('#calcularMultiplicacao')
const formulario = document.querySelector('#formulario')
const estaData = document.querySelector('#thisdate')


botao.addEventListener('click', function () {
    fetch(url + coins)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const dolarReal = data.USDBRL
            const valorDeterminado = dolarReal.high;
            const valorInserido = parseFloat(document.getElementById('numero').value);
            const resultadoCalculado = valorInserido * valorDeterminado;


            let menuDate = 'Data:'
            let estaData = new Date(dolarReal.create_date)
            
            document.getElementById('thisdate').innerText = estaData.toLocaleString()
            document.getElementById('date').innerText = menuDate

            resultado.textContent = `Resultado: ${resultadoCalculado.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })}`;
        });
});


