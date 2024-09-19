const buttonQuickmer = document.querySelector(".buttonQuickmer");
const buttonQuickmer2 = document.querySelector(".buttonQuickmer2");


export function quickToggle() {
    buttonQuickmer.addEventListener("click", () => {
        document.querySelector(".quickbill").classList.toggle("hideScreen");
        document.querySelector(".quickmer").classList.toggle("hideScreen");
    });
}

export function quickToggle2() {
    buttonQuickmer2.addEventListener("click", () => {
        document.querySelector(".quickmer").classList.toggle("hideScreen");
        document.querySelector(".quickbill").classList.toggle("hideScreen");
    });
}
