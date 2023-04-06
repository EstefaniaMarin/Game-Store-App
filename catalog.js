const videogames = [{
        id: 1,
        nombre: "The Legend of Zelda: Breath of the Wild",
        plataforma: "Nintendo Switch",
        precio: 60,
        stock: 10,
        categoria: "Aventura",
        formato: "Físico",
        descripcion: "Es un juego de aventuras de mundo abierto desarrollado por Nintendo para la consola Nintendo Switch. El jugador asume el papel de Link, quien debe explorar el vasto mundo de Hyrule y luchar contra enemigos para salvar el reino de la calamidad."
    },
    {
        id: 2,
        nombre: "Red Dead Redemption 2",
        plataforma: "PlayStation 4",
        precio: 50,
        stock: 8,
        categoria: "Acción",
        formato: "Digital",
        descripcion: "Es un juego de acción y aventuras en mundo abierto desarrollado por Rockstar Games para PlayStation 4. Ambientado en el Viejo Oeste americano, el juego sigue la historia de Arthur Morgan, un forajido que debe enfrentarse a su pasado mientras lucha por sobrevivir en un mundo implacable."
    },
    {
        id: 3,
        nombre: "Assassin's Creed Valhalla",
        plataforma: "Xbox Series X",
        precio: 70,
        stock: 12,
        categoria: "Acción",
        formato: "Físico",
        descripcion: "Es un juego de acción y aventuras desarrollado por Ubisoft Montreal para Xbox Series X. El jugador asume el papel de Eivor, un guerrero vikingo que debe liderar a su clan en una lucha por el poder en la Inglaterra medieval."
    },
    {
        id: 4,
        nombre: "Cyberpunk 2077",
        plataforma: "PC",
        precio: 60,
        stock: 5,
        categoria: "RPG",
        formato: "Digital",
        descripcion: "Es un juego de rol de acción desarrollado por CD Projekt Red para PC. Ambientado en un futuro distópico en la ciudad de Night City, el jugador asume el papel de V, un mercenario que debe luchar contra corporaciones y pandillas para alcanzar la inmortalidad digital."
    },
    {
        id: 5,
        nombre: "FIFA 22",
        plataforma: "PlayStation 5",
        precio: 70,
        stock: 15,
        categoria: "Deportes",
        formato: "Físico",
        descripcion: "Es un juego de simulación de fútbol desarrollado por EA Sports para PlayStation 5. El juego presenta una variedad de modos de juego, incluyendo carreras de equipo, modo carrera y Ultimate Team, y cuenta con equipos y jugadores reales de todo el mundo."
    },
    {
        id: 6,
        nombre: "Call of Duty: Black Ops Cold War",
        plataforma: "Xbox One",
        precio: 60,
        stock: 7,
        categoria: "Shooter",
        formato: "Digital",
        descripcion: "Es un juego de disparos en primera persona desarrollado por Treyarch y Raven Software para Xbox One. Ambientado durante la Guerra Fría, el juego sigue la historia de un grupo de agentes que deben detener una conspiración para desestabilizar el mundo."
    },
    {
        id: 7,
        nombre: "Mortal Kombat 11",
        plataforma: "Nintendo Switch",
        precio: 50,
        stock: 6,
        categoria: "Lucha",
        formato: "Físico",
        descripcion: "Es un juego de lucha desarrollado por NetherRealm Studios para Nintendo Switch. El juego presenta una variedad de personajes, cada uno con sus propios estilos de lucha y habilidades especiales, y ofrece una experiencia de lucha visceral y emocionante."
    },
    {
        id: 8,
        nombre: "Resident Evil Village",
        plataforma: "PlayStation 5",
        precio: 70,
        stock: 9,
        categoria: "Survival Horror",
        formato: "Físico",
        descripcion: "Es un juego de survival horror desarrollado por Capcom para PlayStation 5. El juego sigue la historia de Ethan Winters, quien debe enfrentarse a horrores sobrenaturales y peligrosos en un pueblo aislado de Europa del Este."
    },
    {
        id: 9,
        nombre: "Forza Horizon 5",
        plataforma: "Xbox Series X",
        precio: 60,
        stock: 11,
        categoria: "Conducción",
        formato: "Digital",
        descripcion: "Es un juego de carreras de mundo abierto desarrollado por Playground Games para Xbox Series X. El jugador compite en una variedad de eventos de carreras en un mundo abierto ambientado en México, con una amplia variedad de vehículos para elegir."
    },
    {
        id: 10,
        nombre: "Hitman 3",
        plataforma: "PC",
        precio: 60,
        stock: 4,
        categoria: "Acción",
        formato: "Digital",
        descripcion: "Es un juego de sigilo y acción desarrollado por IO Interactive para PC. El juego presenta una variedad de misiones en todo el mundo, en las que el jugador asume el papel de Agente 47, un asesino a sueldo que debe completar objetivos específicos."
    },
    {
        id: 11,
        nombre: "Demon's Souls",
        plataforma: "PlayStation 5",
        precio: 70,
        stock: 3,
        categoria: "RPG",
        formato: "Físico",
        descripcion: "Es un juego de rol de acción desarrollado por Bluepoint Games para PlayStation 5. El juego sigue la historia de un guerrero que debe enfrentarse a hordas de demonios para salvar el reino de Boletaria."
    },
    {
        id: 12,
        nombre: "Mario Kart 8 Deluxe",
        plataforma: "Nintendo Switch",
        precio: 50,
        stock: 20,
        categoria: "Carreras",
        formato: "Físico",
        descripcion: "Es un juego de carreras de karts desarrollado y publicado por Nintendo para la consola Nintendo Switch. El juego cuenta con una amplia variedad de personajes de la franquicia Mario y otros personajes de Nintendo, así como pistas y modos de juego emocionantes. "
    }
];



const cardsContainer = document.getElementById("cards-container");

videogames.forEach((videojuego, index) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card h-100">
        <img src="https://loremflickr.com/320/240/nintendogame?random=${index}" class="card-img-top" alt="${videojuego.nombre}">
        <div class="card-body mb-3">
          <h5 class="card-title mb-3">${videojuego.nombre}</h5>
          <div class="row mb-3">
            <div class="col-6">
              <p class="card-text"><i class="fas fa-dollar-sign"></i> ${videojuego.precio}</p>
            </div>
            <div class="col-6">
              <p class="card-text"><i class="fas fa-gamepad"></i> ${videojuego.categoria}</p>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-6">
              <p class="card-text"><i class="fas fa-desktop"></i> ${videojuego.plataforma}</p>
            </div>
            <div class="col-6">
              <p class="card-text"><i class="fas fa-tags"></i> ${videojuego.formato}</p>
            </div>
          </div>
          <p class="card-text mb-3">${videojuego.descripcion}</p>
          <div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button" id="button-minus-${index}">-</button>
            <input type="text" class="form-control" placeholder="Cantidad" aria-label="Cantidad" value="0" id="quantity-${index}">
            <button class="btn btn-outline-secondary" type="button" id="button-plus-${index}">+</button>
            <span class="input-group-text">Existencias: <span id="stock-${index}">${videojuego.stock}</span></span>
          </div>
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-primary position-absolute bottom-0 mb-2">
              <i class="fas fa-shopping-cart"></i> Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    `;
    cardsContainer.appendChild(card);
});


const nombresJuegos = videogames.map(juego => juego.nombre);
console.log(nombresJuegos);