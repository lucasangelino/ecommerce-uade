async function getCartGames() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.querySelector(".radiobtn");
    const totalPrice = document.getElementById("total-price");
    const payPrice = document.getElementById("pay-price");
    const carritoIntfo = document.getElementById("carrito-info");
    let amount = 0;

    if (cart.length === 0) {
        carritoIntfo.innerHTML = `<h1>Carrito vacio</h1>`;
        return;
    }

    cart.forEach((game) => {
        const cartItem = document.createElement("div");
        amount += Number(game.price);
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

    totalPrice.textContent = amount;
    payPrice.textContent = amount;

}

getCartGames();