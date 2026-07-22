function formatCurrency(value) {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(value);
}

function calc() {

    const purchasePrice = parseFloat(document.getElementById("price").value) || 0;
    const monthlyRent = parseFloat(document.getElementById("rent").value) || 0;

    // Vorläufige Beispielwerte
    const stampDuty = purchasePrice * 0.01;
    const transferFee = purchasePrice * 0.06;
    const lawyerFee = purchasePrice * 0.01;
    const ministryFee = 600;

    const totalFees =
        stampDuty +
        transferFee +
        lawyerFee +
        ministryFee;

    const totalInvestment =
        purchasePrice +
        totalFees;

    let roi = "-";

    if (monthlyRent > 0 && purchasePrice > 0) {

        roi = (
            (monthlyRent * 12 / purchasePrice) * 100
        ).toFixed(2) + " %";

    }

    document.getElementById("result").innerHTML = `

        <h2>Ergebnis</h2>

        <p><strong>Kaufpreis:</strong>
        ${formatCurrency(purchasePrice)}</p>

        <p><strong>Grunderwerb / Stempelsteuer:</strong>
        ${formatCurrency(stampDuty)}</p>

        <p><strong>Grundbuchumschreibung:</strong>
        ${formatCurrency(transferFee)}</p>

        <p><strong>Anwaltskosten:</strong>
        ${formatCurrency(lawyerFee)}</p>

        <p><strong>Ministeriumsgebühr:</strong>
        ${formatCurrency(ministryFee)}</p>

        <hr>

        <p><strong>Gesamte Nebenkosten:</strong>
        ${formatCurrency(totalFees)}</p>

        <p><strong>Gesamtbudget:</strong>
        ${formatCurrency(totalInvestment)}</p>

        <hr>

        <p><strong>Geschätzte Bruttorendite:</strong>
        ${roi}</p>

    `;

}
