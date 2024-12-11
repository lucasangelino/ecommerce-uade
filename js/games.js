async function getGames() {
  try {
    const res = await fetch("./juegos.json");
    const { games } = await res.json();
    const gamesContainer = document.getElementById("game-grid");
    const allGamesContainer = document.getElementById("all-game-grid");

    if (gamesContainer) {
      games.last.forEach((game) => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("col-md-3");
        gameCard.innerHTML = `
           <div class="col">
          <div class="card">
            <img src=${game.cover} class="card-img-top card-img" alt=${game.cover} />
            <div class="card-body">
              <h5 class="card-title">${game.name}</h5>
              <h6>${game.price}</h6>
              <p class="card-text">
              ${game.description}
              </p>
              <button class="cart-button" onclick="addToCart(${game.id})">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              </button>
            </div>
          </div>
        </div>
          `;
        gamesContainer.appendChild(gameCard);
      });
    }

    games.all.forEach((game) => {
      const gameCard = document.createElement("div");
      gameCard.classList.add("col-md-3");
      gameCard.innerHTML = `
         <div class="col">
        <div class="card">
          <img src=${game.cover} class="card-img-top card-img" alt=${game.cover} />
          <div class="card-body">
            <h5 class="card-title">${game.name}</h5>
            <h6>${game.price}</h6>
            <p class="card-text">
            ${game.description}
            </p>
            <button class="cart-button" onclick="addToCart(${game.id})">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
            </button>
          </div>
        </div>
      </div>
        `;
      allGamesContainer.appendChild(gameCard);
    });

  } catch (error) {
    console.log(error);

  }
}
async function addToCart(id) {
  try {
    console.log(id);
    const res = await fetch("./juegos.json");
    const { games } = await res.json();
    const game = games.all.find((game) => game.id === id);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(game);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateNumberOfCartBadgeItems();
  } catch (error) {
    console.log(error);
  }

}

async function updateNumberOfCartBadgeItems() {
  console.log("updating cart badge");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.querySelector(".cart-badge");
  cartItems.textContent = cart.length;
}

getGames();
updateNumberOfCartBadgeItems();