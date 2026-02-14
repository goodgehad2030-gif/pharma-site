let cart = [];

function addToCart(name, price){
    cart.push({name, price});
    alert("تمت إضافة المنتج إلى السلة 🛒");
}

function openCart(){
    let text = "سلة المشتريات:\n\n";
    let total = 0;

    cart.forEach(item=>{
        text += item.name + " - " + item.price + " ر.س\n";
        total += item.price;
    });

    text += "\nالإجمالي: " + total + " ر.س";
    alert(text);
}
