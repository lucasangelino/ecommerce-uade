async function getCartGames() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.querySelector(".radiobtn");

    cart.forEach((game) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("row");
        cartItem.innerHTML = `
       <div class="cart-item">
                        <span class="cart-item_name">${game.name}</span>
                        <div class="cart-action">
                            <span class="cart-item_price">${game.price}</span>

                        </div>
                    </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

}

getCartGames();