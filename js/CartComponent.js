Vue.component( 'cart', {
    data() {
        return {
            show: false,
            cart: [],
        }
    },
    methods: {
        addProduct( product ) {
            let find = this.cart.find( el => el.id_product === product.id_product );
            if ( find ) {
                this.$parent.putJson( `/api/cart/${ product.id_product }/${ product.product_name }`, { quantity: 1 } )
                    .then( data => {
                        if ( data.result ) {
                            find.quantity++;
                        }
                    } )
            } else {
                let prod = Object.assign( { quantity: 1 }, product );
                this.$parent.postJson( `api/cart/${ product.id_product }/${ product.product_name }`, prod )
                    .then( data => {
                        if ( data.result ) {
                            this.cart.push( prod );
                        }
                    } )
            }
        },
        remove( product ) {
            if ( product.quantity > 1 ) {
                this.$parent.putJson( `/api/cart/${ product.id_product }/${ product.product_name }`, { quantity: -1 } )
                    .then( data => {
                        if ( data.result ) {
                            product.quantity--;
                        }
                    } )
            } else {
                this.$parent.delJson( `/api/cart/${ product.id_product }/${ product.product_name }`, product )
                    .then( data => {
                        if ( data.result ) {
                            this.cart.splice( this.cart.indexOf( product ), 1 );
                        } else {
                            console.log( 'error' );
                        }
                    } )
            }
        },
    },
    mounted() {
        this.$parent.getJson( `/api/cart` )
            .then( data => {
                for ( let el of data.contents ) {
                    this.cart.push( el )
                }
            } );
    },
    template: `
    <div class="modalDialog_open" v-show=!show>
    <cart-item v-for="product of cart" 
    :key="product.id_product" 
    :img="product.img" 
    :cartitems="product">
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