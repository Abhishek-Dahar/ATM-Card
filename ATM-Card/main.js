let viewD = document.getElementById("myBtn");

let element1 =document.getElementById("d1");
let element2 = document.getElementById("d2");
viewD.addEventListener("click",()=>{
    [element1,element2].forEach(el=>{
        if(el.style.visibility === "hidden"){
            el.style.visibility = "visible";
        }
        else{
            el.style.visibility ="hidden";
        }
    });

});
// add copy btn

let cardNoE = document.getElementById("cardNo");
let copyBtn = document.getElementById("_cBtn");
copyBtn.addEventListener("click",()=>{
  let copyNo= cardNoE.innerText;
    navigator.clipboard.writeText(copyNo).then(()=>{
        alert("copy" + copyNo);// use error heandler

    }).catch(error=>{
        console.error("not copy",error)
    });

});
