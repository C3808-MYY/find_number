let buton1 = document.querySelector('#buton_c');
let sayı = document.querySelector("#par2")
let haksayı = document.querySelector("#par1")
let tut = document.querySelector("#number").value
let input_1 = document.querySelector("#number")
let ipucu = document.querySelector("#par3")
let img_margine = document.querySelector("#buz")
let img_margine1 = document.querySelector("#buz1")
let pat = document.querySelector("#buz").src
let pat1 = document.querySelector("#buz1").src
var ad;
var randomNumber = Math.floor(Math.random() * 100) + 1

console.log(pat1="losssl");
// console.log("ilk ", randomNumber);
// console.log("ilk", Number(input_1.value));
// console.log("ilk", Number(input_1.value) === randomNumber);

// sayı.append(sayı.value)
let hak = 0
input_1.disabled = false
buton1.disabled = false
let bosluk = 30
let ebat = 20
console.log(bosluk);
console.log(img_margine);
function butonf() {
  tut = document.querySelector("#number").value
  sayı.append(" ", tut)
  hak = hak + 1
  console.log(hak);
  haksayı.innerHTML = 5 - hak
  tut = document.querySelector("#number").value

  const randomcNumber = () => {
    return Math.floor(Math.random() * 255);
  }
  const randomColor = () => {
    return `rgb(${randomcNumber()},${randomcNumber()},${randomcNumber()})`
  }
  haksayı.style.backgroundColor = randomColor()
  ipucu.style.backgroundColor = randomColor()
  haksayı.style.fontSize = `${ebat}px`
  ipucu.style.fontSize = `${ebat}px`
  img_margine.style.marginRight = `${bosluk}%`
  img_margine1.style.marginLeft = `${bosluk}%`
  bosluk = bosluk - 10
  ebat = ebat + 5
  
  if (tut != randomNumber && hak > 4) {
    
    document.getElementById("buz").src = "./foto/patlama.jpg"
    document.getElementById("buz1").src = "./foto/patlama.jpg"
    img_margine.style.marginRight = "0px";
    img_margine1.style.marginLeft = "0px";
    
    window.alert("hakkınız bitti")
    input_1.disabled = true
    buton1.disabled = true
    
   
    
    
  }
  if (tut == randomNumber) {
    window.alert("tebrikleeeer")
    ipucu.innerHTML = "Tebrikler buldunuz"
    input_1.disabled = true
    buton1.disabled = true

  } else if (tut > randomNumber) {
    ipucu.innerHTML = "daha KÜÇÜK sayı deneyin"

  } else if (tut < randomNumber) {
    ipucu.innerHTML = "daha BÜYÜK sayı deneyin"
  }
}