export let result = 0

export function formula() {
    document.querySelector('.myForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const startDateInput = document.getElementById('startDate').value;
        const endDateInput = document.getElementById('endDate').value;
        let number = document.getElementById('number').value
        number = Number(number)

        const startDate = new Date(startDateInput);
        const endDate = new Date(endDateInput);

        // Calcula a diferença em milissegundos
        const timeDifference = Math.abs(endDate.getTime() - startDate.getTime());
        
        

        // Converte a diferença de milissegundos para dias
        const dayDifference = timeDifference / (1000 * 3600 * 24);

        if (!isNaN(number)) {
            let isSmaller = (dayDifference <= 10)

            if (isSmaller) {
                result = ((number / 30) * dayDifference) + number

            } else {
                result = dayDifference * (number / 30)
            }

            result = Number(result).toFixed(2)
            document.querySelector(".modal-card form h2").textContent = `Proporcional: R$ ${result}`
            document.querySelector(".modal-card").classList.add("hide")
        } else {
            document.querySelector(".error-message").classList.add("error-message-on")
        }
    });
}

