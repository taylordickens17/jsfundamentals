let name = () => {
  return "Taylor";
};

let myNameIs = name();
console.log(myNameIs);

//

function tipCalc(bill) {
  let tip = bill * 0.2;
  return tip;
}

let tipTotal = tipCalc(19.84);
console.log(`the total tip is $${tipTotal}`);

//

let tipCalc = bill => bill * 0.2;
let totalTip = tipCalc(19.84);
console.log(totalTip);
