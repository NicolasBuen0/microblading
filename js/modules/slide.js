export default function slide() {
    const button = document.querySelector(".next");
    const buttonPrev = document.querySelector(".prev");
    const itens = document.querySelector(".slide-itens");
    let cont = 1

    function slide() {

        /*     itens.forEach((item) => {
                console.log(item.offsetLeft)
            }) */

        if (cont < 5) {
            cont++;
            itens.style.transform = `translate3d(-${cont*300}px, 0px, 0px)`;
        }

    }


    button.addEventListener("click", slide)





}