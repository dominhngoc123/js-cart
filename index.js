let add_cart_btn = document.getElementsByClassName("add-cart");
let cart_table_body = document.getElementById("cart_table");
let cart = [];

for (let i = 0; i < add_cart_btn.length; i++) {
  add_cart_btn[i].addEventListener("click", function () {
    let parent = add_cart_btn[i].parentNode;
    let isExist = false;
    cart.forEach((element) => {
      if (element["id"] == i) {
        element["quantity"]++;
        isExist = true;
        return;
      }
    });
    if (!isExist) {
      let product = parent.childNodes;
      let productName = product[3].textContent;
      let productPriceTxt = product[7].textContent;
      let productPriceNum = productPriceTxt.substring(
        1,
        productPriceTxt.length
      );
      cart.push({
        id: i,
        name: productName,
        price: Number(productPriceNum),
        quantity: 1,
      });
    }
    console.log(cart);
    updateCart();
  });
}

function clearCart() {
  cart_table_body.innerHTML = "";
  let row = cart_table_body.insertRow(0);
  let cell_1 = row.insertCell(0);
  let cell_2 = row.insertCell(1);
  let cell_3 = row.insertCell(2);
  cell_1.innerHTML = "Name";
  cell_2.innerHTML = "Price";
  cell_3.innerHTML = "Quantity";
}

function updateCart() {
  clearCart();
  let index = 1;
  let total = 0;
  cart.forEach((element) => {
    let row = cart_table_body.insertRow(index);
    let cell_1 = row.insertCell(0);
    let cell_2 = row.insertCell(1);
    let cell_3 = row.insertCell(2);
    cell_1.innerHTML = element["name"];
    cell_2.innerHTML = element["price"];
    cell_3.innerHTML = element["quantity"];
    index++;
    total += Number(element["price"]) * Number(element["quantity"]);
  });
  let row = cart_table_body.insertRow(index);
  let cell_1 = row.insertCell(0);
  let cell_2 = row.insertCell(1);
  cell_1.colSpan = 2;
  cell_1.innerHTML = "Total";
  cell_2.innerHTML = total;
}
