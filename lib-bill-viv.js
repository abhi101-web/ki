const length = localStorage.length;
const sc = document.getElementById("sc2");
const body = document.getElementById("body");
const h1 = document.getElementById("h1");
const t2 = document.getElementById("j");
const t1 = document.getElementById("input table");

let number = -1;
let number1 = 0;
let s=0;
let nk = -1;
let name = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//input
for (let k =0; k<26;k++){
  const name1 = name.charAt(k);
for (let i = 0; i < length; i++) {
  number += 1;
  const sf = localStorage.key(number);
  const value = JSON.parse(localStorage.getItem(sf));
  const value1 = value.name.charAt(0).toUpperCase();
  if(name1 == value1){
  const row = document.createElement('tr');
  row.id = `r${value.name}`
  row.innerHTML = `
      <td>${value.name}</td>
      <td>${value.pri}</td>
      <td>${value.pri2}</td>
    `;
  t1.appendChild(row)
  }
}
number=-1;
}

//scr
sc.addEventListener("input",()=>{
  const input = document.getElementById("sc2");
  if(input.value != ""){
   t2.innerHTML=``;
  }
  
   //sc1
   let su = -1;
   for (let sj =0;sj<length;sj++){
     su+=1;
     const inputlent = input.value.length;
     const sf1 = localStorage.key(su);
     const value = JSON.parse(localStorage.getItem(sf1));
     const valuelent = value.name.length;
     let inputcov = input.value;
     let valuecov = value.name.charAt(0);
       for (let i = 1; i < inputlent;i++){
         valuecov += value.name.charAt(i);
       }
       if(inputlent == valuelent || inputlent>valuelent){
         if (valuecov == inputcov){
           const row3 = document.getElementById(`r${value.name}`);
             body.style.visibility = "hidden";
             t2.style.visibility = "visible";
             h1.style.visibility = "visible";
             sc.style.visibility = "visible";
             const row = document.createElement('tr');
             row.innerHTML = `${row3.innerHTML}`;
             row.id = `rr${value.name}`;
             t2.appendChild(row);
         }
       }
}

  su=-1;
  //sc2
  
  for (let i =0;i<length;i++){
    su+=1;
    const sf2 = localStorage.key(su);
    const inputlent = input.value.length;
    const value = JSON.parse(localStorage.getItem(sf2));
    let inputcov = input.value;
    let valuecov = value.name.charAt(0);
      for (let i = 1; i < inputlent;i++){
        valuecov += value.name.charAt(i);
      }
      const d = document.getElementById(`rr${value.name}`);
      if(d == null){
      if (valuecov == inputcov){
        const row3 = document.getElementById(`r${value.name}`);
        body.style.visibility = "hidden";
        t2.style.visibility = "visible";
        h1.style.visibility = "visible";
        sc.style.visibility = "visible";
        const row = document.createElement('tr');
        row.innerHTML = `${row3.innerHTML}`;
        row.id = `rr${value.name}`;
        t2.appendChild(row);
      }
    }
    }
    if (input.value == ""){
      body.style.visibility="visible";
      t2.innerHTML=``;
    }
});