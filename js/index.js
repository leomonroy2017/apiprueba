//consumo la api con  fetch
fetch('https://rickandmortyapi.com/api/character')
    .then(function(response) {
        console.log('response.body =', response.body);
        console.log('response.bodyUsed =', response.bodyUsed);
        console.log('response.headers =', response.headers);
        console.log('response.ok =', response.ok);
        console.log('response.status =', response.status);
        console.log('response.statusText =', response.statusText);
        console.log('response.type =', response.type);
        console.log('response.url =', response.url);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        mostraPersonajes(data);
    })
    .catch(function(err) {
        console.error(err);
    });


//funcion para obtener personaje por pesonaje

function mostraPersonajes(data) {
    var result = 'result';
    var resultado = ``;
    for (var i in data) {
        //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
        if (data.hasOwnProperty(i)) {
            resultado += `${resultr}.${i} = ${result[i]}\n`;
        }
    }
    console.log("holaaaaaaa" + resultado)
}