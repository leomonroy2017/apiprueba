traer();
//funcion que utiliza api fetch para obtener todos los personajes 
function traer() {
    traermodal();
    fetch('https://rickandmortyapi.com/api/character')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            var divOut = document.getElementById('contenido');
            var personaje = myJson.results; // llamamos al contenedor de todos los personajes
            console.log(personaje);
            var txtOut = "";
            for (var k in personaje) {


                txtOut += `<div data-toggle="modal" data-target="#personaje${personaje[k].id}" class="col-lg-4 col-md-6 col-sm-12 animated  bounceInDown person" ><a><img class="imgcon" src="${personaje[k].image}"><hr /> <b>${personaje[k].name}</b></a></div>`;
            }
            divOut.innerHTML = txtOut;
        });
}

function traermodal() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            var divOut = document.getElementById('modales');
            var personaje = myJson.results; // llamamos al contenedor de todos los personajes

            var txtOut = "";
            for (var k in personaje) {


                txtOut += `
                <div class="modal fade" id="personaje${personaje[k].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${personaje[k].name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                        <img class="imgmodal" src="${personaje[k].image}">
                        <a><b>Status:</b>${personaje[k].status} </a><hr>
                        <a><b>Species:</b>${personaje[k].species} </a><hr>
                        <a><b>Gender:</b>${personaje[k].gender} </a><hr>
                      
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Episodes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            
                        </div>
                    </div>
                </div>
            </div>
                
                `;
            }
            divOut.innerHTML = txtOut;
        });
}