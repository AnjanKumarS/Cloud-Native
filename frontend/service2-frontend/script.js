console.log("Product page loaded");

document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.getElementById('product-list');
    
    try {
        const response = await fetch('http://localhost:30003/products');
        const products = await response.json();
        
        productList.innerHTML = products.map(product => `
            <div class="product-card">
                <h3>${product.name}</h3>
                <p class="price">₹${product.price}</p>
                <button class="buy-btn">Add to Cart</button>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error fetching products:', error);
        productList.innerHTML = '<p class="error">Error loading products. Please try again.</p>';
    }
});
