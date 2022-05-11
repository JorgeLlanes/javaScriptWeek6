// function firstBtn(color) {
//     document.body.style.background = color;
// }

// function secBtn(color) {
//     document.body.style.background = color;
// }

window.updateTheBackground = function(className) {
    if(className === "bg-red"){
        document.body.classList.remove("bg-white")
        document.body.classList.add(className)
    }else if(className === "bg-white"){
        document.body.classList.remove("bg-red")
        document.body.classList.add(className)

}

        
        
}





    
   
    
