import broadband from "./broadband.js"

export default function calculateDataUsage() {

const myFormQuickmer = document.querySelector('.quickmer');


    myFormQuickmer.addEventListener("submit", (event) => {
        event.preventDefault()

        let minutes = document.querySelector("#minutes").value;
        const activity = document.querySelector("#activity").value;


         let totalUsage = (minutes * broadband[activity]).toFixed(2)

         
        if (totalUsage >= 1024) {
            totalUsage = (totalUsage / 1024).toFixed(2) + " GB";
        } else {
            totalUsage = totalUsage + " MB";
        }

        
        document.querySelector(".modal-card form h2").textContent = `Aproximadamente ${totalUsage}`
        document.querySelector(".modal-card").classList.add("hide")
    })
}