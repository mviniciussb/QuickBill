import { today } from "./currentDate.js"
import { closeData } from "./maturityToClosing.js";
import { getNextMonthDate } from "./nexDateMonth.js";


export default function calculation() {
    document.querySelector('.quickbill').addEventListener('submit', function (event) {
        event.preventDefault();

        const valuePlan = Number(document.getElementById('value-plan').value);

        let todayDate = new Date(today())
        let nextMonthDate = new Date(getNextMonthDate(closeData()))


        let todayDateMilliseconds = todayDate.getTime();
        let nextMonthDateMilliseconds = nextMonthDate.getTime();
        let diferencaMilissegundos = nextMonthDateMilliseconds - todayDateMilliseconds;
        let dayDifference = diferencaMilissegundos / (1000 * 60 * 60 * 24);


        let isSmaller = (dayDifference <= 10)
        let result

        if (isSmaller) {
            result = ((valuePlan / 30) * dayDifference) + valuePlan
        } else {
            result = dayDifference * (valuePlan / 30)
        }

        result = result.toFixed(2).replace(".", ",")


        document.querySelector(".modal-card form h2").textContent = `Proporcional: R$ ${result}`
        document.querySelector(".modal-card").classList.add("hide")
    });
}