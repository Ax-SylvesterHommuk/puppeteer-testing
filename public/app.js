// Sample products data
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
];

// Initialize the cart
const cart = [];

// Function to display products
function displayProducts() {
    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('border', 'border-gray-300', 'p-4', 'rounded', 'text-center');
        card.innerHTML = `
            <h3 class="font-semibold">${product.name}</h3>
            <p class="mt-2">$${product.price.toFixed(2)}</p>
            <button class="mt-4 bg-blue-500 text-white px-2 py-1 rounded" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(card);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Function to update the cart display and total
function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        cartList.appendChild(listItem);
        total += item.price;
    });

    const totalElement = document.getElementById('cart-total');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to redirect to the checkout page with cart data in URL parameters
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart before checking out.");
    } else {
        const cartData = encodeURIComponent(JSON.stringify(cart));
        window.location.href = `checkout.html?cart=${cartData}`;
    }
}

// Initialize the page
displayProducts();