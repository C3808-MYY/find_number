let buton1 = document.querySelector('#buton_c');
let sayı = document.querySelector("#par2")
let haksayı = document.querySelector("#par1")
let tut = document.querySelector("#number").value
let input_1 = document.querySelector("#number")
let ipucu = document.querySelector("#par3")
let img_margine =document.querySelector("img")
var ad;
var randomNumber = 25
// Math.floor(Math.random() * 100) + 1

// console.log("ilk ", randomNumber);
// console.log("ilk", Number(input_1.value));
// console.log("ilk", Number(input_1.value) === randomNumber);

// sayı.append(sayı.value)
let hak = 0
input_1.disabled = false
buton1.disabled = false
let bosluk= 0

function butonf() {
    tut = document.querySelector("#number").value
    sayı.append(" ", tut)
    hak = hak+1
    console.log(hak);
    haksayı.innerHTML = 5-hak
    tut = document.querySelector("#number").value

    const randomcNumber = () => {
        return Math.floor(Math.random() * 255);
      }
      const randomColor = () => {
        return `rgb(${randomcNumber()},${randomcNumber()},${randomcNumber()})`
      }
      buton1.addEventListener("click", () => {
        haksayı.style.backgroundColor = randomColor()})
        buz.style.margin = `0px ,${bosluk}px, 0px`
        bosluk = bosluk-30
        ipucu.style.backgroundColor = randomColor()

      buton1.addEventListener("click", () => {
        
      })
      if(tut != randomNumber && hak>4){
        window.alert("hakkınız bitti")
        input_1.disabled = true
        buton1.disabled = true
    }
    if(tut == randomNumber){
        window.alert("tebrikleeeer")
        ipucu.innerHTML = "Tebrikler buldunuz"
        input_1.disabled = true
        buton1.disabled = true
        
    }
    else if(tut > randomNumber){
        ipucu.innerHTML = "daha KÜÇÜK sayı deneyin"

    }
    else if(tut < randomNumber) {
        ipucu.innerHTML = "daha BÜYÜK sayı deneyin"
    }
}


document.getElementById("buz").src = "gfavicon.png"
    document.getElementById("buz1").src = 