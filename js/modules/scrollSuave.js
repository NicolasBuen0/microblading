export default function scrollSuave() {
    const links = document.querySelectorAll("a[href^='#']")
    links.forEach(link => {
        ["touchstart", "click"].forEach(evento => {
            link.addEventListener(evento, scrollLink)
        })
    })

    function scrollLink(event) {
        event.preventDefault();
        const to = getScrollTopByHref(event.target) - 90;
        scrollToPosition(to);
    }

    function scrollToPosition(to) {
        window.scroll({
            top: to,
            behavior: "smooth",
        });
    }

    function getScrollTopByHref(element) {
        const id = element.getAttribute("href");
        return document.querySelector(id).offsetTop;
    }
}