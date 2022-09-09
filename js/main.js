
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        products: [],
        filtered: [],
        cart:[],
        imgCatalog: 'img/basket.jpg',
        userSearch: '',
        show: false,
    },
    methods: {
        filter(){
         const regexp = new RegExp(this.userSearch, 'i');
         this.products = this.filtered.filter(product => regexp.test(product.product_name));
         console.log(this.products); 

        },
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(item){
            
            let find = this.cart.find (product => item.id_product == product.id_product)
         
            if (find){
                find.quantity++;
            }else{
                this.$set(item, 'quantity',1);
                this.cart.push(item);
                console.log(this.cart)
            }
                
        },
        remove(item){
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.cart.splice(this.cart.indexOf(item), 1);
                        }
                    }
                    
                })
        },
    },
    mounted(){
       this.getJson(`${API + this.catalogUrl}`)
           .then(data => {
               for(let el of data){
                   this.products.push(el);
               }
           });
        // this.getJson(`getProducts.json`)
        //     .then(data => {
        //         for(let el of data){
        //             this.products.push(el);
        //         }
        //     })
        this.filtered =this.products; 
    }
})


     const form = document.querySelector('#openModal');
    // function alerted(){
    //     this.show=true;
    //     form.classList.add('modalDialog_open');
    //     form.classList.remove('modalDialog');
    //   }
    function closeAlerted(){
        form.classList.add('modalDialog');
        form.classList.remove('modalDialog_open');
      }
//       const listBasket = new Basket();
//       listBasket._addGood();
      
s

