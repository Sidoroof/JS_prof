
class GoodsItem {
    constructor(title, price, img) {
    this.title = title;
    this.price = price;
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
    constructor() {
    this.goods = [];
    }
        fetchGoods() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 25000, img: 'img/notebook.jpg'},
            {id: 2, title: 'Mouse', price: 1220, img: 'img/mous.jpg'},
            {id: 3, title: 'Keyboard', price: 2200, img: 'img/keyboard.jpg'},
            {id: 4, title: 'Gamepad', price: 5000, img: 'img/gamepad.jpg'},
            {id: 5, title: 'Headphones', price: 2550, img: 'img/headphones.jpg'},
            {id: 6, title: 'Microphone', price: 650, img: 'img/microphone.jpg'},
            {id: 7, title: 'Telephone', price: 7500, img: 'img/telephone.jpg'},
            {id: 8, title: 'Switch', price: 10000, img: 'img/switch.jpg'},
        ];
    }

    render() {
    let listHtml = '';
    this.goods.forEach(good => {
    const goodItem = new GoodsItem(good.title, good.price, good.img);
    listHtml += goodItem.render();
    });
    document.querySelector('.products').innerHTML = listHtml;
    }

    sumBasket(){
        let totalАmount = 0;
        let listHtml='';
        for(let i=0; i<this.goods.length; i++){
            totalАmount += this.goods[i].price; 
        }
   
        document.querySelector('.sum_basket').innerHTML = totalАmount;
        sum_basket
    }
}

    const list = new GoodsList();
    list.fetchGoods();
    list.render();
    list.sumBasket();
