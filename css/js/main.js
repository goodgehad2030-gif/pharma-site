let cart=[];
let count=0;

function addToCart(name,price){
cart.push({name,price});
count++;
document.getElementById("count").innerText=count;
}

function openCart(){
let list="";
cart.forEach(p=>{
list+=`<li>${p.name} - $${p.price}</li>`;
});
document.getElementById("cartItems").innerHTML=list;
document.getElementById("cartBox").style.display="block";
}

function closeCart(){
document.getElementById("cartBox").style.display="none";
}

function checkout(){
let text="طلب جديد:%0A";
cart.forEach(p=>{
text+=`${p.name} - $${p.price}%0A`;
});
window.open("https://wa.me/967000000000?text="+text);
}
