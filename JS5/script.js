function calcula() {
    let raio = document.getElementById("raio").value;
    document.getElementById("area").value = (3.14159 * (raio*raio)).toFixed(2);
    document.getElementById("circunferencia").value = ((2 * 3.14159) * raio).toFixed(2);
}