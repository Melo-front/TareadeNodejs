
const contenedor = document.getElementById('resultado');
const jugadores = async() =>{
    try{
        const respuesta = await fetch(`json/index.json`);
        const data = await respuesta.json();
        data.jugadores.forEach(jugador => {
            contenedor.innerHTML += `
            <div class="col-md-4 col-lg-3 ">
                <div class="card h-100">
                    <div class="card-body bg-dark text-white">
                        
                        <h2>${jugador.nombre}</h2>
                        <p>Edad: ${jugador.edad}</p>
                        <p>Posición: ${jugador.posicion}</p>
                        <p>Equipo: ${jugador.equipo}</p>
                        
                    </div>
                </div>
                
            </div>
            ` 
        });
    }catch(error){

    }
}

jugadores();