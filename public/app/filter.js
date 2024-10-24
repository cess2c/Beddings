import { loadItems } from './display.js';

document.addEventListener('DOMContentLoaded', () => {
    const sizeFilters = document.querySelectorAll('input[name="size"]');
    const colorFilters = document.querySelectorAll('input[name="color"]');
    const categoryFilters = document.querySelectorAll('input[name="category"]');
    const priceMinInput = document.querySelector('input[placeholder="Min"]');
    const priceMaxInput = document.querySelector('input[placeholder="Max"]');
    const products = document.querySelectorAll('#product');
    const applyFiltersButton = document.getElementById('apply-filters');

    function filterProducts() {
        const selectedSizes = Array.from(sizeFilters).filter(input => input.checked).map(input => input.id);
        const selectedColors = Array.from(colorFilters).filter(input => input.checked).map(input => input.id);
        const selectedCategories = Array.from(categoryFilters).filter(input => input.checked).map(input => input.id);
        const minPrice = parseFloat(priceMinInput.value) || 0;
        const maxPrice = parseFloat(priceMaxInput.value) || Infinity;

        products.forEach(product => {
            const sizeMatch = selectedSizes.length === 0 || selectedSizes.includes(product.dataset.size);
            const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.dataset.color);
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.dataset.category);
            const productPrice = parseFloat(product.dataset.price) || 0;
            const priceMatch = productPrice >= minPrice && productPrice <= maxPrice;

            if (sizeMatch && colorMatch && categoryMatch && priceMatch) {
                product.style.display = '';
            } else {
                product.style.display = 'none'; 
            }
        });
    }
    applyFiltersButton.addEventListener('click', filterProducts);
   
});

//Search Filter
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const products = document.querySelector('.product_container'); 
    console.log(products);
    console.log('Search input and products initialized'); 
    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.toLowerCase().trim();
    
        products.forEach(product => {
            const productNameElement = product.querySelector('.product-name');

            if (productNameElement) {
                const productName = productNameElement.textContent.toLowerCase();
                
                if (productName.includes(searchText)) {
                    product.style.display = ''; 
                } else {
                    product.style.display = 'none'; 
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    loadItems(); 
});
