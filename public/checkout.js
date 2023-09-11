// Function to extract cart data from URL parameters
function getCartFromURL() {
    const searchParams = new URLSearchParams(window.location.search);
    const cartData = searchParams.get("cart");
    return cartData ? JSON.parse(decodeURIComponent(cartData)) : [];
}

// Function to display order details on the checkout page
function displayOrderDetails() {
    const orderDetails = document.getElementById('order-details');
    const cart = getCartFromURL();

    orderDetails.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        orderDetails.appendChild(listItem);
        total += item.price;
    });

    const totalElement = document.getElementById('order-total');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to confirm the order
function confirmOrder() {
    const cart = getCartFromURL();

    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart before checking out.");
    } else {
        // Implement your order confirmation logic here
        // You can send the order to a server, process payments, etc.
        alert("Order confirmed! Thank you for your purchase.");
        window.location.href = "index.html";
    }
}

// Initialize the checkout page
displayOrderDetails();