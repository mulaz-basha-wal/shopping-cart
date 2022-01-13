window.addEventListener('load',function() {
    if (localStorage.getItem("Cart")) {
        let cart=JSON.parse(localStorage.getItem("Cart"));
        document.querySelector("#lblCartCount").textContent=cart.length;
        if (cart.length===0) {
            document.querySelector("tbody").innerHTML=`<tr class='text-center'><td colspan=6>No Items are added to cart</td></tr>`;
        }else{
            let sum = 0;
            cart.forEach(element => {
                document.querySelector("tbody").innerHTML+=`
                    <tr>
                        <td><img class="rounded product" src="images/${element.imgsrc}.webp" alt="Cart Item 1" height="100px"></td>
                        <td>${element.name}</td>
                        <td>${element.desc}</td>
                        <td id=${element.name}_base>${element.price}</td>
                        <td>
                            <button class="btn btn-secondary" onclick="addItem('${element.name}')">+</button>
                            <h5 id=${element.name}_count class="d-inline-block p-3">${element.num_items}</h5>
                            <button class="btn btn-secondary" onclick="removeItem('${element.name}')">-</button>
                        </td>
                        <td><h5 id=${element.name}_cost class='items_cost'>${element.price}</h5></td>
                    </tr>`;
                sum+=Number(element.price);
            });
            document.querySelector("#total_price").textContent=`Total Cost: ₹${sum}`;
        }
    }
});

function addItem(button){
    let btn = document.querySelector(`#${button}_count`);
    let ni = Number(btn.textContent)+1;
    btn.textContent=ni;
    let base = Number(document.querySelector(`#${button}_base`).textContent);
    let cost=document.querySelector(`#${button}_cost`);
    cost.textContent=ni*base;
    totalPrice();
}

function removeItem(button){
    let btn = document.querySelector(`#${button}_count`);
    let ni = Number(btn.textContent)-1;
    btn.textContent=ni;
    let base = Number(document.querySelector(`#${button}_base`).textContent);
    let cost=document.querySelector(`#${button}_cost`);
    cost.textContent=ni*base;
    totalPrice();
}

function totalPrice() {
    let tc=0;
    let prices = document.querySelectorAll(".items_cost");
    prices.forEach(element => {
        tc+=Number(element.textContent);
    });
    document.querySelector("#total_price").textContent=`Total Cost: ₹${tc}`;
}