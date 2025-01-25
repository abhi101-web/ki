const length = localStorage.length;
const sc = document.getElementById("sc2");
const body = document.getElementById("body");
const h1 = document.getElementById("h1");
const t2 = document.getElementById("t2");
const t1 = document.getElementById("input table");
const save = document.getElementById("save");
const buend = document.getElementById("done");
const del = document.getElementById("del")
let number = -1;

//input
for (let i = 0; i < length; i++){
    number += 1;
    const jf = localStorage.key(number);
    const value = JSON.parse(localStorage.getItem(jf));
    const row = document.createElement('tr');
    row.id = `r${value.name}`;
    row.innerHTML = `
        <td><input id="n${value.name}"></td>
        <td><input id="${value.name}"></td>
        <td><input id="s${value.name}"></td>
        <td><input type="checkbox"; id="c${value.name}" style="width:20px; height:20px;   cursor: pointer;   accent-color: blue;     border: 3px solid #fff;"></td>
      `;
    t1.appendChild(row)
    const input = document.getElementById(`${value.name}`);
    input.value=`${value.pri}`;
    const input2 = document.getElementById(`s${value.name}`);
    input2.value=`${value.pri2}`;
    const input3 = document.getElementById(`n${value.name}`);
    input3.value=`${value.name}`;
}

//scr
function j(){
  let n = -1;
  for (let t =0;t<length;t++){
    n+=1;
    const sfkd = localStorage.key(n);
    const value = JSON.parse(localStorage.getItem(sfkd));
    const i3 = document.getElementById(`n${value.name}`);
    const i1 = document.getElementById(`s${value.name}`);
    const i2 = document.getElementById(`${value.name}`);
    const chelk12 = document.getElementById(`1c${value.name}`);
    const d = document.getElementById(`1n${value.name}`);
    const d1 = document.getElementById(`1s${value.name}`);
    const d2 = document.getElementById(`1${value.name}`);
    const chelk2 = document.getElementById(`c${value.name}`);
    if (isNaN(d,d1,d2,chelk12)){
      if(i3.value != d.value){
        i3.value = d.value
      }
      if(i1.value != d1.value){
        i1.value = d1.value
      }
      if(i2.value != d2.value){
        i2.value = d2.value
      }
      if(chelk12.checked){
        chelk2.checked="true";
      }
    }
  }
  const input = document.getElementById("sc2");
  if(input.value != ""){
   t2.innerHTML=``;
  }

  //sc1
  let su = -1;
  for (let sj =0;sj<length;sj++){
    su+=1;
    const inputlent = input.value.length;
    const sf = localStorage.key(su);
    const value = JSON.parse(localStorage.getItem(sf));
    const valuelent = value.name.length;
    let inputcov = input.value;
    let valuecov = value.name.charAt(0);
      for (let i = 1; i < inputlent;i++){
        valuecov += value.name.charAt(i);
      }
      if(inputlent == valuelent || inputlent>valuelent){
        if (valuecov == inputcov){
          const chelk1 = document.getElementById(`c${value.name}`);
          const i3 = document.getElementById(`n${value.name}`);
          const i1 = document.getElementById(`s${value.name}`);
          const i2 = document.getElementById(`${value.name}`);
          i3.id=`1n${value.name}`;
          i1.id=`1s${value.name}`;
          i2.id=`1${value.name}`;
          chelk1.id=`1c${value.name}`;
          const row3 = document.getElementById(`r${value.name}`);
            body.style.visibility = "hidden";
            t2.style.visibility = "visible";
            h1.style.visibility = "visible";
            sc.style.visibility = "visible";
            const row = document.createElement('tr');
            row.innerHTML = `${row3.innerHTML}`;
            row.id = `rr${value.name}`;
            t2.appendChild(row);
            i3.id=`n${value.name}`;
            i1.id=`s${value.name}`;
            i2.id=`${value.name}`;
            chelk1.id=`c${value.name}`;
            const d = document.getElementById(`1n${value.name}`);
            d.value = i3.value
            const d1 = document.getElementById(`1s${value.name}`);
            d1.value=i1.value;
            const d2 = document.getElementById(`1${value.name}`);
            d2.value=i2.value;
            const chelk2 = document.getElementById(`1c${value.name}`);
            if(chelk1.checked){
              chelk2.checked="true";
            }
        }
      }
  }

  //sc2
  su=-1;
  for (let i =0;i<length;i++){
    su+=1;
    const sfd = localStorage.key(su);
    const inputlent = input.value.length;
    const value = JSON.parse(localStorage.getItem(sfd));
    const chelk1 = document.getElementById(`c${value.name}`);
    let inputcov = input.value;
    let valuecov = value.name.charAt(0);
      for (let i = 1; i < inputlent;i++){
        valuecov += value.name.charAt(i);
      }
      const d = document.getElementById(`1n${value.name}`);
      if (d == null){
      if (valuecov == inputcov){
        const i3 = document.getElementById(`n${value.name}`);
        const i1 = document.getElementById(`s${value.name}`);
        const i2 = document.getElementById(`${value.name}`);
        i3.id=`1n${value.name}`;
        i1.id=`1s${value.name}`;
        i2.id=`1${value.name}`;
        chelk1.id=`1c${value.name}`;
        const row3 = document.getElementById(`r${value.name}`);
          body.style.visibility = "hidden";
          t2.style.visibility = "visible";
          h1.style.visibility = "visible";
          sc.style.visibility = "visible";
          const row = document.createElement('tr');
          row.innerHTML = `${row3.innerHTML}`;
          row.id = `rr${value.name}`;
          t2.appendChild(row);
          chelk1.id=`c${value.name}`;
          i3.id=`n${value.name}`;
          i1.id=`s${value.name}`;
          i2.id=`${value.name}`;
          const d4 = document.getElementById(`1n${value.name}`);
          d4.value = i3.value
          const d1 = document.getElementById(`1s${value.name}`);
          d1.value=i1.value;
          const d2 = document.getElementById(`1${value.name}`);
          d2.value=i2.value;
          const chelk2 = document.getElementById(`1c${value.name}`);
          if(chelk1.checked){
            chelk2.checked="true";
          }
      }
    }
    }
    if (input.value == ""){
      body.style.visibility="visible";
      t2.innerHTML=``;
    }
}
sc.addEventListener("input",()=>{
  j();
});

//save
save.addEventListener("click",()=>{
  number=0;
  for (let h = 0; h<length;h++){
    number+=1;
    const value = JSON.parse(localStorage.getItem(`${number}`));
    const i3 = document.getElementById(`n${value.name}`);
    const i1 = document.getElementById(`s${value.name}`);
    const i2 = document.getElementById(`${value.name}`);
    if(i3.value == "" || i1.value == "" || i2.value == ""){
      sc.value=value.name;
      j();
      return;
    }
  }
  number=0;
  for (let h = 0; h<length;h++){
    number+=1;
    const value = JSON.parse(localStorage.getItem(`${number}`));
    const row3 = document.getElementById(`r${value.name}`);
    const input = document.getElementById(`${value.name}`);
    const cov = input.value;
    if (cov != value.pri){
      value.pri = cov;
      const cov1 = JSON.stringify(value)
      localStorage.setItem(`${number}`,`${cov1}`)
    }
  const input2 = document.getElementById(`s${value.name}`);
    const cov2 = input2.value;
    if (cov2 != value.pri2){
      value.pri2 = cov2
      const cov1 = JSON.stringify(value)
      localStorage.setItem(`${number}`,`${cov1}`)
    }
    const input3 = document.getElementById(`n${value.name}`);
    const cov3 = input3.value.trim();
    if (cov3 != value.name){
        if ( cov3 != ""){
      value.name=cov3
    }
      const cov1 = JSON.stringify(value)
      localStorage.setItem(`${number}`,`${cov1}`)
      const value1 = JSON.parse(localStorage.getItem(`${number}`));
      row3.id=`r${value1.name}`;
      input.id = `${value1.name}`;
      input2.id=`s${value1.name}`;
      input3.id=`n${value1.name}`;
  }
  }
});

//del
del.addEventListener("click",()=>{
  let kk = localStorage.length
  let nu = 0;
  for(let h =0;h<kk;h++){
    let sk = localStorage.key(h);
    const kss = JSON.parse(localStorage.getItem(sk));
    const input1 = document.getElementById(`c${kss.name}`);
    if(input1.checked){
      nu+=1;
    }
  }


  //del2
  const ans = prompt(`you will Delete ${nu}? (yes or no) `);
  if (ans === "yes" || ans === "y") {
  for (let ll =0;ll<3;ll++){
    kk = localStorage.length
    let dl = -1;
    for(let u =0;u<kk;u++){
      dl++;
      const j = localStorage.key(dl);
      const value = JSON.parse(localStorage.getItem(j));
      if(value != null){
      const input = document.getElementById(`c${value.name}`);
      if(input.checked){
      const row = document.getElementById(`r${value.name}`);
      localStorage.removeItem(j);
      row.innerHTML=``;
      }
    }else{dl++;}
  }
    }
  }
});