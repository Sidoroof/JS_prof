
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
class GoodsItem {
    constructor(product,img = 'img/basket.jpg') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item">
        <div class="cart-item"> 
            <img class="img-style" src="${this.img}" alt=”${this.title}”>           
            <h3 class ="h-style"> ${this.title}</h3>
            <p class ="p-style"> ${this.price}</p>                    
            <button class="buy-btn">Купить</button>
        </div>
    </div>`
 }
}
class GoodsList {
    // constructor() {
    // this.goods = [];
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this.fetchGoods()
            .then(data => { //data - объект js
                 this.goods = data;
//                 console.log(data);
                 this.render();
                 this.sumBasket();
            });
    }
        fetchGoods() {
            return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);             
            });
        // this.goods = [
        //     {id: 1, title: 'Notebook', price: 25000, img: 'img/notebook.jpg'},
        //     {id: 2, title: 'Mouse', price: 1220, img: 'img/mous.jpg'},
        //     {id: 3, title: 'Keyboard', price: 2200, img: 'img/keyboard.jpg'},
        //     {id: 4, title: 'Gamepad', price: 5000, img: 'img/gamepad.jpg'},
        //     {id: 5, title: 'Headphones', price: 2550, img: 'img/headphones.jpg'},
        //     {id: 6, title: 'Microphone', price: 650, img: 'img/microphone.jpg'},
        //     {id: 7, title: 'Telephone', price: 7500, img: 'img/telephone.jpg'},
        //     {id: 8, title: 'Switch', price: 10000, img: 'img/switch.jpg'},
        // ];
    }

    // render() {
    // let listHtml = '';
    // this.goods.forEach(good => {
    // const goodItem = new GoodsItem(good.title, good.price, good.img);
    // listHtml += goodItem.render();
    // });
    // document.querySelector('.products').innerHTML = listHtml;
    // }
    render(){
        const block = document.querySelector(this.container);
    for (let product of this.goods){
        const productObj = new GoodsItem(product);
//            this.allProducts.push(productObj);
        block.insertAdjacentHTML('beforeend', productObj.render());
    }
        
    }

    sumBasket(){
        let totalАmount = 0;
        for(let i=0; i<this.goods.length; i++){
            totalАmount += this.goods[i].price; 
        }
   
        document.querySelector('.sum_basket').innerHTML = totalАmount;
        //sum_basket
    }
}

    const list = new GoodsList();
    list.fetchGoods();
    list.render();
    list.sumBasket();

    class Basket {

        constructor(container = '.divModal'){
            this.container = container;
            this.goods = [];//массив товаров из JSON документа
            this._addGood()
                .then(data => { //data - объект js
                     this.goods = data;
    //                 console.log(data);
                     this.render()
                });
        }
        _addGood() {
            return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
             
            });
        }
        removeGood() {
    
        }
        changeGood() {
    
        }
        
        render(){
            const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ElemBasket(product);
//            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
            
        }
        
    }
    
    class ElemBasket {
        constructor(product,img = 'img/basket.jpg') {
            this.title = product.product_name;
            this.price = product.price;
            this.id = product.id_product;
            this.img = img;
           
            }
            render(){
                return `<div class="product-basketitem">
                <div class="cart-item"> 
                    <img class="img-basketstyle" src="${this.img}" alt=”${this.title}”>           
                    <h3 class ="h-style"> ${this.title}</h3>
                    <p class ="p-style"> ${this.price}</p>                   
                    
                </div>
            </div>`
    }
        
    }
   

    const form = document.querySelector('#openModal');
    function alerted(){
        form.classList.add('modalDialog_open');
        form.classList.remove('modalDialog');
      }
    function closeAlerted(){
        form.classList.add('modalDialog');
        form.classList.remove('modalDialog_open');
      }
      const listBasket = new Basket();
      listBasket._addGood();
      
      function zd1(){
        const str = document.querySelector('.dz').innerText;
        //"One: 'Hi Mary.' Two: 'Oh, hi.' One: 'How are you doing?'Two: 'I'm doing alright. How about you?' One: 'Not too bad. The weather is great isn't it?' Two: 'Yes. It's absolutely beautiful today.' One: 'I wish it was like this more frequently.' Two: 'Me too.' One: 'So where are you going now?' Two: 'I'm going to meet a friend of mine at the department store.' One: 'Going to do a little shopping?' Two: 'Yeah, I have to buy some presents for my parents.' One: 'What's the occasion?' Two: 'It's their anniversary.' One: 'That's great. Well, you better get going. You don't want to be late.' Two: 'I'll see you next time.' One: 'Sure. Bye.'";
        const regexp = /'/g;
        document.querySelector('.rezultat').innerText= str.replace(regexp, '"')
       // console.log(str.replace(regexp, '"'))
      }
      function zd2(){
        const str = document.querySelector('.dz').innerText;
        console.log(str)
        // "One: 'Hi Mary.' Two: 'Oh, hi.' One: 'How are you doing?' Two: 'I'm doing alright. How about you?' One: 'Not too bad. The weather is great isn't it?' Two: 'Yes. It's absolutely beautiful today.' One: 'I wish it was like this more frequently.' Two: 'Me too.' One: 'So where are you going now?' Two: 'I'm going to meet a friend of mine at the department store.' One: 'Going to do a little shopping?' Two: 'Yeah, I have to buy some presents for my parents.' One: 'What's the occasion?' Two: 'It's their anniversary.' One: 'That's great. Well, you better get going. You don't want to be late.' Two: 'I'll see you next time.' One: 'Sure. Bye.'";
        const regexp = /\B'/g;
        document.querySelector('.rezultat').innerText=str.replace(regexp, '"')

       //  console.log(str.replace(regexp, '"'))
      }

