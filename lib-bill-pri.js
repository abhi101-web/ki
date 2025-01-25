//input
const itme = document.getElementById("item");
const price = document.getElementById("itemPrice");
const price2 = document.getElementById("itemPrice2");
const done = document.getElementById("addItem");
let dd =-1;

//code
done.addEventListener("click", () => {
let number1 =1;
let number = localStorage.length;
function ks(){
    for(let a = 0; a<number;a++){
        let k = localStorage.key(a);
        if(number1 == k){
            number1++;
            ks();
            return;
        }
    }
}
ks();
const itme1 = itme.value;
const price1 = price.value;
const price21 = price2.value;
for (let i = 0; i<number;i++){
    dd+=1;
    let k2 = localStorage.key(dd)
    const s = JSON.parse(localStorage.getItem(k2));
    if(number != 0){
    if ( s.name == itme1 ){
        alert("it is there")
        dd = 0;
        itme.value="";
        price.value="";
        price2.value="";
        return;
    }
}
}
    if (itme1 == 0 || itme1 < 0 || itme1 > 0 || itme1 == ""){
        alert("plase enter the name")
        dd = -1;
        return;
    }
    if (price1 == "" ){
        alert("plase enter the price")
        dd = -1;
        return;
    }
    if (price21 == "" ){
        alert("plase enter the price")
        dd = -1;
        return;
    }
    const value1 = {
        name:itme1,
        pri:price1,
        pri2:price21
    }
    localStorage.setItem(number1,JSON.stringify(value1));
    itme.value = "";
    price.value="";
    price2.value="";
    dd=-1;
}); 