export function focusInput(){
    document.addEventListener("DOMContentLoaded", function() {
        const input = document.getElementById('number');
    
        input.addEventListener("focus", function() {
          input.removeAttribute("placeholder");
        });
    
        input.addEventListener("blur", function() {
          if (input.value === "") {
            input.setAttribute("placeholder", "Use pontos. Ex: 1.0");
          }
        });
      });
}