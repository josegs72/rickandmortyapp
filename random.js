const book$$ = document.querySelector(".book");
const book1$$ = document.querySelector(".book1");
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

document.addEventListener("DOMContentLoaded", () => {
  const random = getRandomInt(1, 151);
  fetchdata(random);
});
const fetchdata = async (id) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    pintarCard(data);
  } catch (error) {
    console.log(error);
  }
};

const pintarCard = (data) => {
    const { name, image, status, species, gender
    } = data;
    const card = document.createElement("div");
    card.classList.add("card1");
    card.innerHTML = `
    <div class="character1">
    <h3 class="name2">${name}</h3>
    <p class="species2">${species},${status}</p>
    <p class="gender2">${gender}</p>
    <img class="image2" src="${image}" alt="${name}">
    </div>
    `;
    book1$$.appendChild(card);
    };
    function getRandom() {
        const random = getRandomInt(1, 151);
        fetchdata(random);
      book$$.innerHTML = "";

       if (book1$$.hasChildNodes()) {
            book1$$.innerHTML = "";
        }
}









export { getRandomInt, fetchdata ,pintarCard, getRandom };
