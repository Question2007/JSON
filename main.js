const API_URL = "https://retoolapi.dev/zIFuAm/data";


async function init() {
    const response = await fetch(API_URL);
    
    const adatok = await response.json();
    
    const tablazat = document.getElementById("tablazat");

    for (const auto of adatok) {
        const tr = document.createElement("tr")
        const modell = document.createElement("td")
        const szin = document.createElement("td")
        const evjarat = document.createElement("td")

        modell.textContent = auto.modell
        szin.textContent = auto.szin
        evjarat.textContent = auto.evjarat

        tr.appendChild(modell)
        tr.appendChild(szin)
        tr.appendChild(evjarat)

        tablazat.appendChild(tr)

        /*tr.style.border = "2px solid #2b2b2b";*/

        if (auto.szin == "fekete") {
            tr.style.backgroundColor = "#2b2b2b";
            modell.style.color = "white";
            szin.style.color = "white";
            evjarat.style.color = "white";
        }
        else if (auto.szin == "piros") {
            tr.style.backgroundColor = "#ff4a4a";
            modell.style.color = "white";
            szin.style.color = "white";
            evjarat.style.color = "white";
        }


    }
}
init();