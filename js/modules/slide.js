export default function slide() {
    const button = document.querySelector(".next");
    const buttonPrev = document.querySelector(".prev");
    const itens = document.querySelector(".slide-itens");
    let cont = 0

    function slide() {
   
        if (cont < itens.children.length -1) {
            cont++;
            itens.style.transform = `translate3d(-${cont*300}px, 0px, 0px)`;
        }

        else{
        itens.style.transform = `translate3d(-0px, 0px, 0px)`;
          cont = 0

        }
    }


    function slidePrev() {
   
        if (cont <= itens.children.length -1) {
            cont--;
            itens.style.transform = `translate3d(-${cont*300}px, 0px, 0px)`;

        }
            else if(cont = -1){   cont= 0
 }
             

    
    }




    button.addEventListener("click", slide)
    buttonPrev.addEventListener("click", slidePrev)






}   