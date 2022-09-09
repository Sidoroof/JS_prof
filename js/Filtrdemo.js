Vue.component('filtrdemo', {
   //props: ['use'],
   template: `<form action="#" class="search-form" @submit.prevent="$parent.filter">
   <input type="text" class="search-field" v-model="$parent.userSearch">
   <button type="submit" class="btn-search">
       <i class="fas fa-search"></i>
   </button>
</form>`
});
// Vue.component('product', {
//     props: ['product', 'img'],
//     template: `
//     <div class="product-item ">
//          <img  class="img-style" :src="img" alt="Some img">
//         <div class="desc">
//             <h3>{{product.product_name}}</h3>
//             <p>{{product.price}} </p>
//             <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
//         </div>
// </div>
//     `
// })