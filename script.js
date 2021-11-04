fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/21/modelos/4825/anos/2014-1')
    .then(response=>response.json()).then(response=>geraCard(response.Marca, response.Modelo, response.AnoModelo, response.Valor))
    .catch(error => console.log(error));

function geraCard(marca, modelo, ano, valor){
    let newEl = document.createElement('div');
    newEl.innerHTML=`
    <h3>${marca} - ${modelo}</h3>
    <p>Ano: ${ano}</p>
    <p>Valor: ${valor}</p>`;
    document.body.appendChild(newEl)
}