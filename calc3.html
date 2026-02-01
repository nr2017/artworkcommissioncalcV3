// Author: neil robinson
// Function to calculate total price of artwork
// Date: 30th May 2021
// Revision: 1st February 2026
// Version 3.1.2: Updated to modern CONST/LET syntax and fixed declaration errors

window.addEventListener("load", () => {
    const button = document.getElementById("totalPriceButton");

    button.addEventListener("click", () => {
        // Input Elements
        const prodHeightElem = document.getElementById("prodHeight");
        const prodWidthElem = document.getElementById("prodWidth");
        const hourlyRateElem = document.getElementById("hourlyRate");
        const transportCostsElem = document.getElementById("transportationCosts");
        const mountFrameCostsElem = document.getElementById("mountFrameCosts");
        const galleryCommElem = document.getElementById("galleryCommission");

        // Output and Error Elements
        const totalOutputElem = document.getElementById("totalOutput");
        const roundedOutputElem = document.getElementById("roundedOutput");
        const prodHeightError = document.getElementById("productionHeight");
        const prodWidthError = document.getElementById("productionWidth");
        const hoursRateError = document.getElementById("rateHours");
        const commissionErrorElem = document.getElementById("percentage");
        const errorTotalElem = document.getElementById("errorTotal");

        // Parse Values
        const productionHeight = parseFloat(prodHeightElem.value);
        const productionWidth = parseFloat(prodWidthElem.value);
        const hourRate = parseFloat(hourlyRateElem.value);
        const framing = parseFloat(mountFrameCostsElem.value) || 0;
        const transport = parseFloat(transportCostsElem.value) || 0;
        const commission = parseFloat(galleryCommElem.value);

        // Calculations
        const prodSize = productionHeight + productionWidth;
        const prodRate = prodSize * hourRate;
        const totalProd = prodRate + transport + framing;
        const commissionTotal = (totalProd * commission) / 100;
        const totalCost = commissionTotal + totalProd;
        const rounded = Math.ceil(totalCost / 5) * 5;

        // Validation - Height
        if (isNaN(productionHeight) || productionHeight < 1) {
            prodHeightError.innerHTML = "Enter total height in cms.";
        } else if (productionHeight > 1000) {
            prodHeightError.innerHTML = "Height cannot be more than 1000 cms.";
        } else {
            prodHeightError.innerHTML = "";
        }

        // Validation - Width
        if (isNaN(productionWidth) || productionWidth < 1) {
            prodWidthError.innerHTML = "Enter total width in cms.";
        } else if (productionWidth > 1000) {
            prodWidthError.innerHTML = "Width cannot be more than 1000 cms.";
        } else {
            prodWidthError.innerHTML = "";
        }

        // Validation - Hourly Rate
        if (isNaN(hourRate) || hourRate < 2) {
            hoursRateError.innerHTML = "Enter a rate per cm more than £1.";
        } else if (hourRate > 10) {
            hoursRateError.innerHTML = "Rate per cm entered cannot be more than £10.";
        } else {
            hoursRateError.innerHTML = "";
        }

        // Validation - Commission
        if (isNaN(commission) || commission < 0) {
            commissionErrorElem.innerHTML = "Enter minimum of 0% (if commission not applicable).";
        } else if (commission > 50) {
            commissionErrorElem.innerHTML = "Enter a maximum of 50% commission.";
        } else {
            commissionErrorElem.innerHTML = "";
        }

        // Validation - Total and Final Output
        if (isNaN(totalCost) || totalCost < 0) {
            errorTotalElem.innerHTML = "Enter amounts more than £1. Where no amount or time is required, input zero. <br> Decimal points accepted, no commas allowed.";
            totalOutputElem.innerHTML = "";
            roundedOutputElem.innerHTML = "";
        } else {
            if (totalCost > 10000) {
                errorTotalElem.innerHTML = `Warning: A total of £${Math.round(totalCost)} will require extra insurance cover if over £10k.`;
            } else {
                errorTotalElem.innerHTML = "";
            }

            totalOutputElem.innerHTML = 
                `Size of artwork x rate = £${prodRate.toFixed(2)}<br><br>` +
                `Production costs (minus commission) = £${totalProd.toFixed(2)}<br><br>` +
                `Total selling cost plus gallery commission = £${totalCost.toFixed(2)}`;

            roundedOutputElem.innerHTML = `&pound;${rounded}`;
        }
    }, false);
}, false);
