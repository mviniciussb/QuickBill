import { closeButton } from "../secondaries-scripts/buttonCloseModal.js";

export function calculateDataUsage() {
    
    const minutes = document.querySelector('#minutes').value;
    const activity = document.getElementById('activity').value;
    const myFormQuickmeter = document.querySelector('.quickmeter');
    let totalUsage = ""

    console.log("antes" + minutes)

    myFormQuickmeter.addEventListener("submit", (event) => {
        event.preventDefault()

        const usageRates = {
            videoSD: 7,       
            videoHD: 16.6,     
            video4K: 83.3,      
            audioHQ: 2.5,      
            webBrowsing: 1,     
            socialMedia: 5,     
            videoCall: 10,      
        };
    
        console.log(minutes)
        
        
        
        totalUsage = (minutes * usageRates[activity]).toFixed(2)
            
    
        if (totalUsage >= 1024) {
            totalUsage = (totalUsage / 1024).toFixed(2) + ' GB';
        } else {
            totalUsage = totalUsage + ' MB';
        }
    
            
            
            document.querySelector(".modal-card form h2").textContent = `Aproximadamente ${totalUsage}`
            document.querySelector(".modal-card").classList.add("hide")
        })
        
        closeButton()
}