const products = [
    { id: 1, title: 'Notebook', price: 25000, img: 'img/notebook.jpg' },
    { id: 2, title: 'Mouse', price: 1220, img: 'img/mous.jpg' },
    { id: 3, title: 'Keyboard', price: 2200, img: 'img/keyboard.jpg' },
    { id: 4, title: 'Gamepad', price: 5000, img: 'img/gamepad.jpg' },
    { id: 5, title: 'Headphones', price: 2550, img: 'img/headphones.jpg' },
    { id: 5, title: 'Microphone', price: 650, img: 'img/microphone.jpg' },
    { id: 5, title: 'Telephone', price: 7500, img: 'img/telephone.jpg' },
    { id: 5, title: 'Switch', price: 10000, img: 'img/switch.jpg' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (obj) => {
    return `<div class="product-item">
                <div class="cart-item">
                    <img class="img-style" src="${obj.img}" alt=”${obj.title}”>
                    <h3 class ="h-style"> ${obj.title}</h3>
                    <p class ="p-style"> ${obj.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join("");
};
renderPage(products);