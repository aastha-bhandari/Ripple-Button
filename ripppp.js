//here we will do the hovering action at the place where we place our pointer step

const btnele = document.querySelector(".btn")
btnele.addEventListener("mouseover", (e)=>{ //callback fn
    //console.log(e.pageX, e.pageY), it gives the x and y cord of the mouse pointer in webpage
    //console.log(btnele.offsetLeft, btnele.offsetTop) it gives position of button relative to the page

    //mouse cord are always measured from top and left
    const x = (e.pageX - btnele.offsetLeft) //now it will give the cord that at what spot out mouse is
    const y = (e.pageY - btnele.offsetTop)

    btnele.style.setProperty("--posX", x + "px")
    btnele.style.setProperty("--posY", y + "px")
})