const nomes = [
    "Arthur", "Bernardo", "Cesar", "Daniel", "Davi", "Erica", 
    "Leonardo Cloque", "Valentina", "Nathalie", "Juliana", "Laura", 
    "Vinicius", "Matheus Assis", "Rian", "Gustavo Oliveira", "Gustavo Machado", "Matheus Cecchi", "Henrique", "Pedro Alexandre",
    "Pedro Henrique", "Mannuela", "Leonardo Carvalho", "Raíssa", "Isaac", "Gabriela"
];

document.getElementById("gerar-nome").addEventListener("click", function() {
    if (nomes.length < 2) {
        alert("Não há nomes suficientes para gerar sem repetição. Por favor, recarregue a página.");
        return;
    }

    let nomesRestantes = [...nomes];

    const indiceAleatorio1 = Math.floor(Math.random() * nomesRestantes.length);
    const nomeAleatorio1 = nomesRestantes[indiceAleatorio1];
    nomesRestantes.splice(indiceAleatorio1, 1); 

    const indiceAleatorio2 = Math.floor(Math.random() * nomesRestantes.length);
    const nomeAleatorio2 = nomesRestantes[indiceAleatorio2];

    document.getElementById("nomes-gerados").innerText = `${nomeAleatorio1} e ${nomeAleatorio2}`;
});