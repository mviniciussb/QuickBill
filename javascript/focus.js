export function focusInput() {
  document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById('number');

    input.addEventListener("focus", function () {
      input.removeAttribute("placeholder");
    });

    input.addEventListener("blur", function () {
      if (input.value === "") {
        input.setAttribute("placeholder", "Ex: 1.0");
      }
    });
  });
}


export function errorMessageFocus() {
  document.getElementById("number").addEventListener("focus", () => {
    document.querySelector(".error-message").classList.remove("error-message-on")
  })
}
;