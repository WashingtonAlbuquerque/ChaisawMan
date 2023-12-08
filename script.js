function limparTexto() {
    var input = document.getElementById("emailInput");
    if (input.value === "Seu Melhor Email") {
        input.value = "";
    }
}