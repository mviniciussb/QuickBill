export function closeButton() {
    const closeButton = document.querySelector(".buttonClose")
    closeButton.addEventListener("click", close)

    function close() {
        document.querySelector(".modal-card").classList.remove("hide")
    }
}