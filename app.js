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
console.log(randomNumber);
// console.log(pat1="losssl");
// console.log("ilk ", randomNumber);
// console.log("ilk", Number(input_1.value));
// console.log("ilk", Number(input_1.value) === randomNumber);

// sayı.append(sayı.value)
let hak = 0
input_1.disabled = false
buton1.disabled = false
let bosluk = "36"
let ebat = 20
// console.log(bosluk);
// console.log(img_margine);
img_margine.style.marginRight = `${bosluk}%`
// img_margine.style.marginLeft = "0%"
  img_margine1.style.marginLeft = `${bosluk}%`
  // img_margine1.style.marginLeft = "0%"
  
function butonf() {
  tut = document.querySelector("#number").value
  sayı.append(" ", tut)
  
  // console.log(hak);
  haksayı.innerHTML = 6 - hak
  hak = hak + 1
  tut = document.querySelector("#number").value

  const randomcNumber = () => {
    return Math.floor(Math.random() * 255);
  }
  const randomColor = () => {
    return `rgb(${randomcNumber()},${randomcNumber()},${randomcNumber()})`
  }
  bosluk = bosluk - 6
  haksayı.style.backgroundColor = randomColor()
  ipucu.style.backgroundColor = randomColor()
  haksayı.style.fontSize = `${ebat}px`
  ipucu.style.fontSize = `${ebat}px`
  img_margine.style.marginRight = `${bosluk}%`
  img_margine1.style.marginLeft = `${bosluk}%`
  
  ebat = ebat + 9
  console.log(hak);
  if (tut != randomNumber && hak > 6) {
    img_margine.style.marginRight = "0px";
    img_margine1.style.marginLeft = "0px";
    document.getElementById("buz").src = "./foto/patlama.jpg"
    document.getElementById("buz1").src = "./foto/patlama.jpg"
    
    ipucu.innerHTML = "OLMADI ARABALAR PATLADI"
    
    window.alert("hakkınız bitti")
    input_1.disabled = true
    buton1.disabled = true
    
   
    
    
  }
  if (tut == randomNumber && hak == 7) {
    img_margine.style.marginRight = "-20%"
    img_margine1.style.marginLeft = "-20%"
    ipucu.innerHTML = "TEBRİKLERRR :)"
    window.alert("tebrikleeeer")
           input_1.disabled = true
    buton1.disabled = true
    randomNumber = -1
  }
  if (tut == randomNumber) {
    ipucu.innerHTML = "TEBRİKLERRR :)"
    window.alert("tebrikleeeer")
    
    input_1.disabled = true
    buton1.disabled = true

  }
   if (tut > randomNumber && hak < 7) {
    ipucu.innerHTML = "DAHA KÜÇÜK SAYI  DENEYİN"
    // console.log("hak kucuk", hak);

  }  if (tut < randomNumber && hak < 7) {
    ipucu.innerHTML = "DAHA BÜYÜK SAYI DENEYİN"
    // console.log("hak büyük",hak);
  }
}