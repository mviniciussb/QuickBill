export default function calculateDataUsage() {


    const myFormQuickmer = document.querySelector('.quickmer');


    myFormQuickmer.addEventListener("submit", (event) => {
        event.preventDefault()

        let minutes = document.querySelector("#minutes").value;
        const activity = document.querySelector("#activity").value;
        let totalUsage


        const usageRates = {
            videoSD: 7,
            videoHD: 16.6,
            video4K: 83.3,
            audioHQ: 2.5,
            webBrowsing: 1,
            socialMedia: 5,
            videoCall: 10,
        };


        totalUsage = (minutes * usageRates[activity]).toFixed(2)

        if (totalUsage >= 1024) {
            totalUsage = (totalUsage / 1024).toFixed(2) + " GB";
        } else {
            totalUsage = totalUsage + " MB";
        }

        
        document.querySelector(".modal-card form h2").textContent = `Aproximadamente ${totalUsage}`
        document.querySelector(".modal-card").classList.add("hide")
    })
}