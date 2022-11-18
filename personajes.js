const book$$ = document.querySelector(".book");
const formulario$$ = document.querySelector(".formulario");
const input$$ = document.querySelector("input");
const book1$$ = document.querySelector(".book1");
//PERSONAJES//

function pers(characters) {
  for (const character of characters) {
    //ELEMENTOS//
    const character$$ = document.createElement("div");
    const names$$ = document.createElement("h3");
    const image$$ = document.createElement("img");

    //CLASES//
    character$$.classList.add("character");
    names$$.classList.add("name");
    image$$.classList.add("image");

    //CONTENIDO ELEMENTOS
    names$$.textContent = character.name;
    image$$.style.backgroundImage = `url(${character.image})`;

    //INSERTO ELEMENTOS//
    character$$.appendChild(names$$);
    character$$.appendChild(image$$);
    book$$.appendChild(character$$);
   

}
}

fetch(
  "https://rickandmortyapi.com/api/character/1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,21,22,23,24,25,26,27,28"
)
  .then((response) => response.json())
  .then((characters) => pers(characters));



 


//BUSCAR PERSONAJES//

const buscar = (event) => {
  event.preventDefault();
  const url = `https://rickandmortyapi.com/api/character/?name=${input$$.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      book$$.innerHTML = "";
      data.results.forEach((personaje) => {
        const card1 = document.createElement("div");
        card1.classList.add("card");
        card1.innerHTML = `
        <div class="character">
        <h3 class="name1">${personaje.name}</h3>
        <p class="species1">${personaje.species},${personaje.gender}</p>
        <p class="status1">${personaje.status}</p>
        <img class = "image" src="${personaje.image}" alt="${personaje.name}" />
    </div>  `;
        book$$.appendChild(card1);

        //RESETEO FORMULARIO//

        formulario$$.reset();

        //EVENTO CLICK//
        if (book1$$.hasChildNodes()) {
          book1$$.innerHTML = "";
        }
      });
    });
};



export { buscar, pers};
