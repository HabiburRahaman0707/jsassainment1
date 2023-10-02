let product = [
    {
        id: 0,
        image: 's1.jpg',
        title: 'NIKE P1',
        price: 80,
    },
    {
        id: 1,
        image: 's1.jpg',
        title: 'NIKE P2',
        price: 120,
    } ,
    {
        id: 2,
        image: 's1.jpg',
        title: 'NIKE P3',
        price: 320,
    } ,
    {
        id: 3,
        image: 's1.jpg',
        title: 'NIKE P4',
        price: 100,
    }
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
        <div class= 'img-box'>
        <img class='image' src=${image}></img>
        </div>
        <div class= 'bottom'>
        <p>${title}</p>
        <h2>${price}.00</h2>` +
        "<button onclick='addtocart("+(i++)+")'>add to cart </button>" +
        `</div>
        </div>`
        )
}).join('');

 var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}
function displaycart(a){
    let j = 0; total = 0;
    document.getElementById('count').innerHTML =  cart.length;
    if(cart.lengh==0){
        document.getElementById('cartItem').innerHTML = "your cart is empty"
        document.getElementById('total').innerHTML = "$ " +0+".00";
    } 
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image,title, price} = items;
            total=total+price;
            document.getElementById('total').innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class= 'row-img'>
                    <img class='rowing' src=${image}></img>
                </div>

                <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>${price}.00</h2>` +
                    "<button class='fa-solid fa-trash' onclick='delElement("+(j++)+")'>DEL</button></div>"
                    );
            }).join('');
            
        }
    }