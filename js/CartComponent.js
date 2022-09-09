Vue.component('carts', {
    props: ['cart', 'img', 'visibility'],
    template: `
    <div class="modalDialog_open" v-show="visibility">
    <cart-item v-for="product of cart" :key="product.id_product" :img="img" :cartitems="product">
    </cart-item>
    </div>`
});

Vue.component('cart-item', {
    props: ['img', 'cartitems'],
    template: `
    <div class="cart-item">
    <div class="product-basketitem">
        <img class="img-style" :src="img" alt="Some img">
        <h3>{{cartitems.product_name}}</h3>
        <p>Количество {{cartitems.quantity}} </p>
        <p>Стоимость {{cartitems.price*cartitems.quantity}}</p>
        <button class="buy-btn" @click="$root.remove(cartitems)">&times;</button>
        </div>
    </div>`
})