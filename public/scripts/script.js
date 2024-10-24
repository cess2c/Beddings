 
 // Initialize cart
 const cart = [];

   
 const addToCartButtons = document.querySelectorAll('.add-to-cart');

 
 const cartIcon = document.getElementById('cartIcon');

 
 function toggleCart() {
     const cartModal = document.getElementById('cartModal');
     cartModal.classList.toggle('hidden');
     displayCartItems();
 }

 // Add click event listeners to each button
 addToCartButtons.forEach(button => {
     button.addEventListener('click', function(event) {
         event.preventDefault(); // Prevent the default link behavior

         
         const productId = this.getAttribute('data-product-id');
         const productName = this.getAttribute('data-product-name');
         const productPrice = parseFloat(this.getAttribute('data-product-price'));

        
         const existingItem = cart.find(item => item.id === productId);

         if (existingItem) {
             
             existingItem.quantity += 1;
         } else {
             // If item does not exist, add new item
             cart.push({
                 id: productId,
                 name: productName,
                 price: productPrice,
                 quantity: 1
             });
         }

         
         const originalText = this.textContent;
         this.textContent = 'ADDED TO CART!';

         
         setTimeout(() => {
             this.textContent = originalText;
         }, 1000);

         displayCartItems();
     });
 });

 // Add click event listener to cart icon
 cartIcon.addEventListener('click', function(event) {
     event.preventDefault(); 
     toggleCart(); 
 });

 // Function to display cart items
 function displayCartItems() {
     const cartItemsContainer = document.getElementById('cartItems');
     const cartItemCount = document.getElementById('cartItemCount');
     const cartTotal = document.getElementById('cartTotal');
     cartItemsContainer.innerHTML = ''; 

     if (cart.length === 0) {
         cartItemsContainer.innerHTML = '<p class="text-gray-800">Your cart is empty.</p>';
         cartItemCount.textContent = '0 Items';
         cartTotal.textContent = 'Total: ₱0.00';
     } else {
         let total = 0;
         cartItemCount.textContent = `${cart.reduce((acc, item) => acc + item.quantity, 0)} Items`;
         
         cart.forEach((item, index) => {
             const listItem = document.createElement('div');
             listItem.classList.add('flex', 'items-center', 'justify-between', 'gap-4');
             listItem.innerHTML = `
                 <div class="flex items-center">
                     <img src="images/prod${item.id}.jpg" class="w-16 h-16 p-2 shrink-0 bg-gray-200 rounded-md" />
                     <div class="ml-4">
                         <p class="text-sm text-gray-800">${item.name} (${item.quantity})</p>
                         <p class="text-gray-500 text-xs mt-1">Quantity: ${item.quantity}</p>
                     </div>
                 </div>
                 <div class="flex items-center">
                     <span class="text-base font-bold text-gray-800 mr-4">₱${(item.price * item.quantity).toFixed(2)}</span>
                     <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] fill-red-500 inline cursor-pointer" viewBox="0 0 24 24" onclick="removeItem(${index}); return false;">
                         <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                     </svg>
                 </div>
             `;
             cartItemsContainer.appendChild(listItem);
             
             // Update the total
             total += item.price * item.quantity;
         });

         cartTotal.textContent = `Total: ₱${total.toFixed(2)}`;
     }
 }

 // Function to remove item from the cart
 function removeItem(index) {
     cart.splice(index, 1); 
     displayCartItems(); 
 }

 // Checkout button click event
 document.getElementById('checkoutButton').addEventListener('click', () => {
     if (cart.length === 0) {
         alert('Your cart is empty!');
     } else {
 
         alert('Proceeding to checkout...');
     }
 });






















