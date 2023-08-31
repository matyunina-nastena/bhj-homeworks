const productControls = document.querySelectorAll('.product__quantity-controls');
const productsAdd = document.querySelectorAll('.product__add');

productControls.forEach(control => {
    const buttonAddValue = control.querySelector('.product__quantity-control_inc');
    const buttonRemoveValue = control.querySelector('.product__quantity-control_dec');
    const productQuantityValue = control.querySelector('.product__quantity-value');

    buttonAddValue.addEventListener('click', () => {
        productQuantityValue.textContent = parseInt(productQuantityValue.textContent) + 1;
    });

    buttonRemoveValue.addEventListener('click', () => {
        productQuantityValue.textContent = parseInt(productQuantityValue.textContent) - 1;
        if(productQuantityValue.textContent < 1) {
            productQuantityValue.textContent = 1;
        }
    });
});

productsAdd.forEach(product => {
    product.addEventListener('click', (event) => {
        const goods = event.target.closest('.product');
        const productId = goods.dataset.id;
        const productImage = goods.querySelector('.product__image').src;
         const productCount = parseInt(goods.querySelector('.product__quantity-value').textContent); 
        //  Получаем количество товара из элемента "goods" с классом "product__quantity-value", преобразуем его в число 
        
        // Проверяем, существует ли уже товар в корзине 
        // Если товар уже есть в корзине, то мы увеличиваем его количество на "productCount" и обновляем соответствующий элемент 
        let cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
        if(cartProduct) {
            let cartProductCount = parseInt(cartProduct.querySelector('.cart__product-count').textContent) + productCount;
            cartProduct.querySelector('.cart__product-count').textContent = cartProductCount;
        } else {
            cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = productId;
            cartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${productCount}</div>
            `;
            document.querySelector('.cart__products').appendChild(cartProduct);
        }
    });
});