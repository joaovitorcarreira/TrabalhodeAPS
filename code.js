const solos = document.getElementById("tipos-de-solos");
const tabelasolos = document.getElementById("solos-tabela");
let tabelacriada = false;

solos.addEventListener("click", function() {
    if (tabelacriada) {
        tabelasolos.innerHTML = '';
        tabelacriada = false;
    } else {
            
        const tabela = document.createElement("table");
        tabela.classList.add("tabela-informacoes");

        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        const trHead = document.createElement("tr");
        const th1 = document.createElement("th");
        const th2 = document.createElement("th");
            th1.textContent = "Tipos de solos";
            th2.textContent = "Exemplo de Solo";
            trHead.appendChild(th1);
            trHead.appendChild(th2);
            thead.appendChild(trHead);

            const trBody = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");

            const dados = [
                { tipo: "Terra roxa", exemplo: "Exemplo 1" },
                { tipo: "Argiloso", exemplo: "Exemplo 2" },
                { tipo: "Arenoso", exemplo: "Exemplo 3" },
                { tipo: "Siltoso", exemplo: "Exemplo 4" }
            ];

            td1.textContent = "Terra roxa";
            td2.textContent = "Exemplo";
            trBody.appendChild(td1);
            trBody.appendChild(td2);
            tbody.appendChild(trBody);

            tabela.appendChild(thead);
            tabela.appendChild(tbody);

            tabelasolos.appendChild(tabela);

            tabelacriada = true;
        }
    });

