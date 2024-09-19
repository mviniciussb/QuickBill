export default function backpage() {
    document.addEventListener("keydown", (event) => {
        if(event.key == "Escape"){
            document.querySelector(".modal-card").classList.toggle("hide")
        }
    })
}