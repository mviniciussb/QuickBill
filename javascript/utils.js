export let result = 0

export function formula(){
    document.querySelector('.myForm').addEventListener('submit', function (event) {
        event.preventDefault();
    
        const startDateInput = document.getElementById('startDate').value;
        const endDateInput = document.getElementById('endDate').value;
        const number = Number(document.getElementById('number').value)
    
    
        const startDate = new Date(startDateInput);
        const endDate = new Date(endDateInput);
    
        // Calcula a diferença em milissegundos
        const timeDifference = Math.abs(endDate.getTime() - startDate.getTime());
    
        // Converte a diferença de milissegundos para dias
        const dayDifference = timeDifference / (1000 * 3600 * 24);
    
        let isSmaller = (dayDifference <= 10)
    
        if (isSmaller) {
            result = ((number / 30) * dayDifference) + number
        } else {
            result = dayDifference * (number / 30)
        }

        document.querySelector(".modal-card form h2").textContent = `O seu proporcional é de R$ ${result.toFixed(2).replace(".", ",")}`
        document.querySelector(".modal-card").classList.add("hide")

    }); 
}

export function closeButton(){
    const closeButton = document.querySelector(".buttonClose")
    closeButton.addEventListener("click", close)

    function close(){
    document.querySelector(".modal-card").classList.remove("hide")
    }
}