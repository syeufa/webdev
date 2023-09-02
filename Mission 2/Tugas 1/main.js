var products = [
  {
    id: 1,
    name: "The OG Cinnamon Rolls",
    image: "assets/logo.png",
    price: 10,
  },
  {
    id: 2,
    name: "Cinnamon Croissant",
    image: "assets/logo.png",
    price: 5.99,
  },
  {
    id: 3,
    name: "Cinnamon Sugar Pannacotta",
    image: "assets/logo.png",
    price: 7,
  },
  {
    id: 4,
    name: "Spice Cake",
    image: "assets/logo.png",
    price: 5.50,
  },
  {
    id: 5,
    name: "Cinnamon Pudding",
    image: "assets/logo.png",
    price: 5,
  },
  {
    id: 6,
    name: "Cinnamon Twist",
    image: "assets/logo.png",
    price: 10.99,
  },
  // Add more products here
];

const productCardContainer = document.getElementById("product-card");


function createProductCard(product) {
  const productCol = document.createElement("div");
  productCol.className = "col-md-4"; // Setiap kolom akan mengambil 4/12 lebar layar pada tampilan medium dan lebih besar

  const productCard = document.createElement("div");
  productCard.className = "product-card";

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = product.name;
  productCard.appendChild(productImage);

  const productName = document.createElement("div");
  productName.className = "product-name";
  productName.textContent = product.name;
  productCard.appendChild(productName);

  var cleanedName = product.name.split(' ').join('');

  const productPrice = document.createElement("div");
  productPrice.className = "product-price";
  productPrice.textContent = "$"+ product.price;
  productCard.appendChild(productPrice);

  const quantityDiv = document.createElement("div");
  quantityDiv.className = "quantity";

  const decrementButton = document.createElement("button");
  decrementButton.textContent = "-";
  decrementButton.onclick = function(){
    subProduct(quantityValue.id);
  }
  quantityDiv.appendChild(decrementButton);

  const quantityValue = document.createElement("input");
  quantityValue.value = "0";
  quantityValue.size = "1";
  quantityValue.type = "text";
  quantityValue.id = "quantity"+ cleanedName;
  quantityDiv.appendChild(quantityValue);

  const incrementButton = document.createElement("button");
  incrementButton.textContent = "+";
  incrementButton.onclick = function(){
    addProduct(quantityValue.id);
  }
  quantityDiv.appendChild(incrementButton);

  productCard.appendChild(quantityDiv);

  const addToCartButton = document.createElement("button");
  addToCartButton.className = "btn btn-primary";
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.onclick = function(){
    addToCart(product.name, product.price, "quantity" + cleanedName, product.image);
  }
  productCard.appendChild(addToCartButton);

  productCol.appendChild(productCard);
  productCardContainer.appendChild(productCol);
}

products.forEach(createProductCard);

function addProduct(qty){
  var quantityInput = document.getElementById(qty);
  var quantity = parseInt(quantityInput.value);

  if (!isNaN(quantity)) {
      quantityInput.value = quantity + 1;
}
}

function subProduct(qty){
  var quantityInput = document.getElementById(qty);
  var quantity = parseInt(quantityInput.value);

  if (!isNaN(quantity)) {
    if (quantity > 0){
       quantityInput.value = quantity - 1;
    }
}
}


const cart = []; 
var totalPrice = 0;
var tax = 0;
var total = 0;


function addToCart(prName, prPrice, qty, prImage) {
  var quantity = parseInt(document.getElementById(qty).value);
  var pricePerProduct = quantity * parseFloat(prPrice); // Menggunakan parseFloat untuk mengambil harga desimal

  if (quantity > 0) {
    // Hanya menambahkan ke keranjang jika kuantitas lebih dari 0
    var cartItem = {
      
      cImage:prImage,
      cproductName: prName,
      cQuantity: quantity,
      cproductPrice: prPrice,
      total: pricePerProduct
    };

    cart.push(cartItem);
    updateCart();
    document.getElementById(qty).value = 0;
  }
}


function updateCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = ""; // Clear the cart list before updating

  totalPrice = 0;
  tax = 0;
  total = 0;

  cart.forEach(function (cartItem) {
    var card = document.createElement("div");
    card.className = "card";

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var column1 = document.createElement("div");
    column1.className = "col";

    var cardImage = document.createElement("img");
    cardImage.className = "card-image";
    cardImage.src = cartItem.cImage;

    column1.appendChild(cardImage);

    // Kolom kedua (Kolom Nama Produk, Harga, dan Kuantitas)
    var column2 = document.createElement("div");
    column2.className = "col";

    var productName = document.createElement("h5");
    productName.className = "card-title";
    productName.textContent = cartItem.cproductName;

    var productDetails = document.createElement("p");
    productDetails.className = "card-text";
    productDetails.textContent = `$${cartItem.cproductPrice.toFixed(2)} x ${cartItem.cQuantity}`;

    column2.appendChild(productName);
    column2.appendChild(productDetails);

     // Kolom ketiga (Kolom Total)
     var column3 = document.createElement("div");
     column3.className = "col";

    var totalDetails = document.createElement("span");
    totalDetails.className = "total-text";
    totalDetails.textContent = `Total: $${cartItem.total.toFixed(2)}`;

    column3.appendChild(totalDetails);

    cardBody.appendChild(column1);
    cardBody.appendChild(column2);
    cardBody.appendChild(column3);

    card.appendChild(cardBody);

    cartList.appendChild(card);

    totalPrice += cartItem.total;
    tax = totalPrice * 0.11;
    total = totalPrice + tax;
  });

  document.getElementById("total-price").textContent = "  $ " + totalPrice.toFixed(2);
  document.getElementById("taxes").textContent = " $ " +  tax.toFixed(2);
  document.getElementById("total").textContent = "  $ " + total.toFixed(2);
}
// function addToCart(prName, prPrice, qty) {
//   const cart=[];
//   var totalPrice, tax, total= 0;

//   var quantity = parseInt(document.getElementById(qty).value);
//   var pricePerProduct = quantity * parseInt(prPrice);


//   var cartItem = {
//         cproductName: prName,
//         cQuantity: quantity,
//         cproductPrice: prPrice,
//         total: pricePerProduct
//   };
//   cart.push(cartItem);

//   totalPrice += pricePerProduct;
//   tax = pricePerProduct * 0.11;
//   total = totalPrice + tax;

//   updateCart();
//   document.getElementById(qty).value = 0;
// }

// function updateCart(){
    // const cartList = document.getElementById("cart-items");
    // cartList.innerHTML = "";

    // cart.forEach(function(cartItem) {
    //   var card = document.createElement("div");
    //   card.className = "card";
    
    //   var cardBody = document.createElement("div");
    //   cardBody.className = "card-body";
    
    //   var productName = document.createElement("h5");
    //   productName.className = "card-title";
    //   productName.textContent =cartItem.cproductName;
    
    //   var productDetails = document.createElement("p");
    //   productDetails.className = "card-text";
    //   productDetails.textContent ="0";
    
    //   cardBody.appendChild(productName);
    //   cardBody.appendChild(productDetails);
    
    //   card.appendChild(cardBody);
    
    //   cartContainer.appendChild(card);
    // });

    // // menampilkan total harga
    // document.getElementById("total-price").textContent = "Rp. " + totalPrice;

    // // menampilkan pajak
    // document.getElementById("taxes").textContent = "Rp. " + tax;

    // // menampilkan total bayar
    // document.getElementById("total").textContent = "Rp. " + total;
//}


