 traer();
 //funcion que utiliza api fetch para obtener todos los personajes 
 function traer() {
     fetch('https://rickandmortyapi.com/api/character')
         .then(function(response) {
             return response.json();
         })
         .then(function(myJson) {
             var divOut = document.getElementById('contenido');
             var personaje = myJson.results; // llamamos al contenedor de todos los personajes

             var txtOut = "";
             for (var k in personaje) {


                 txtOut += `<div class="col-lg-4 col-md-6 col-sm-12 animated  bounceInDown person" ><img src="${personaje[k].image}"><hr /> <b>${personaje[k].name}</b></div>`;
             }
             divOut.innerHTML = txtOut;
         });
 }