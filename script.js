window.onload=function(){

const button = document.querySelector(".button")
button.addEventListener( "click", () => {
    const passone = document.querySelector(".pass-one").value
    const passtwo = document.querySelector(".pass-two").value
    if (passtwo == passone) {
        const div = document.querySelector(".relative")
        div.setAttribute("style", "display: none;" )
    } else {
        const div = document.querySelector(".relative")
        div.setAttribute("style", "display: block;" )
    }
    
}) 

}

