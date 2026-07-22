// ==========================================
// KTS Budget- & Renditerechner
// script.js - Version 1.0
// ==========================================

// Eingabefelder
const purchasePriceInput = document.getElementById("purchasePrice");
const monthlyRentInput = document.getElementById("monthlyRent");
const calculateBtn = document.getElementById("calculateBtn");

// Ergebnisfelder
const purchaseResult = document.getElementById("purchaseResult");
const feesResult = document.getElementById("feesResult");
const lawyerResult = document.getElementById("lawyerResult");
const transferResult = document.getElementById("transferResult");
const finalResult = document.getElementById("finalResult");
const totalInvestment = document.getElementById("totalInvestment");
const annualRent = document.getElementById("annualRent");
const yieldResult = document.getElementById("yield");

// Euro-Formatierung
function euro(value) {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0
    }).format(value);
}

// Berechnung
calculateBtn.addEventListener("click", () => {

    const purchase = Number(purchasePriceInput.value);

    if (!purchase || purchase <= 0) {
        alert("Bitte geben Sie einen Kaufpreis ein.");
        return;
    }

    // ------------------------------------
    // Platzhalterwerte
    // Diese werden später mit eurem Chef
    // auf die tatsächlichen Werte für
    // Nordzypern angepasst.
    // ------------------------------------

    const acquisitionFees = purchase * 0.03;
    const lawyerFees = purchase * 0.01;
    const transferFees = purchase * 0.06;

    const total =
        purchase +
        acquisitionFees +
        lawyerFees +
        transferFees;

    // Ergebnisse ausgeben

    purchaseResult.textContent = euro(purchase);
    feesResult.textContent = euro(acquisitionFees);
    lawyerResult.textContent = euro(lawyerFees);
    transferResult.textContent = euro(transferFees);
    finalResult.textContent = euro(total);
    totalInvestment.textContent = euro(total);

    // Rendite berechnen

    const monthlyRent = Number(monthlyRentInput.value);

    if (monthlyRent > 0) {

        const yearlyRent = monthlyRent * 12;
        const grossYield = (yearlyRent / purchase) * 100;

        annualRent.textContent = euro(yearlyRent);
        yieldResult.textContent = grossYield.toFixed(2) + " %";

    } else {

        annualRent.textContent = "-";
        yieldResult.textContent = "-";

    }

});

// WhatsApp-Button
const whatsapp = document.getElementById("whatsappButton");

if (whatsapp) {

    // HIER SPÄTER EURE WHATSAPP-NUMMER EINTRAGEN
    whatsapp.href = "https://wa.me/905000000000";

}
