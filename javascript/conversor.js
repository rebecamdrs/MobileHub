function csvParaJson(csv) {
    // Divide o CSV em linhas, removendo espaços em branco no início e no final
    const lines = csv.trim().split("\n");
    const headers = lines[0].split(",").map(h => h.trim());

    return lines.slice(1).map(line => {
        const values = []; // Armazena os valores extraídos da linha atual
        let current = "";  // String temporária para montar valores entre vírgulas
        let inQuotes = false; // Indica se o caractere atual está dentro de aspas

        for (const char of line) {
            if (char === '"' && inQuotes) {
                // Fecha o estado de aspas, quando encontra aspas de fechamento
                inQuotes = false; 
            } else if (char === '"' && !inQuotes) {
                // Abre o estado de aspas, quando encontra aspas de abertura
                inQuotes = true;
            } else if (char === ',' && !inQuotes) {
                // Encontra uma vírgula fora de aspas, indicando o fim de um valor
                values.push(current.trim()); // Adiciona o valor ao array `values`
                current = ""; // Reseta o valor temporário
            } else {
                // Adiciona o caractere atual ao valor temporário
                current += char;
            }
        }

        // Adiciona o último valor após o loop, que não é seguido por uma vírgula
        values.push(current.trim());

        // Cria um objeto mapeando cabeçalhos para valores da linha atual
        return Object.fromEntries(headers.map((h, i) => [h, values[i] || ""]));
    });
}

export default csvParaJson;