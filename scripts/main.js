const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// No.1
let products=[
                'パンツ:6.99',
                '靴下:5.99',
                'T シャツ:14.99',
                'ズボン:31.99',
                '靴:23.99'];

for (let i = 0; i < products.length; i++) { // No.2
  // No.3
    let subarray = products[i].split(":");
    let name = subarray[0];
    let price = Number(subarray[1]);
    total += price;
  // No.4

  // No.5
  let itemText = name+"--$"+price;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = '合計: $' + total.toFixed(2);
