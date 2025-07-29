// Author: neil robinson
// Function to calculate total price of artwork
// Date: 30th May 2021
// Revision: 29th July 2025
// Version 3.1

// Calculate button
	window.addEventListener("load", function() {
    var button = document.getElementById("totalPriceButton");
	button.addEventListener("click", function() {
		
		// Framing/Mounting & Production costs
		var prodHeightElem = document.getElementById("prodHeight");
		var prodWidthElem = document.getElementById("prodWidth");
		var hourlyRateElem = document.getElementById("hourlyRate");
		var transportCostsElem = document.getElementById("transportationCosts");
		var mountFrameCostsElem = document.getElementById("mountFrameCosts");
				
				
		// Gallery commission including VAT	
		var galleryCommElem = document.getElementById("galleryCommission");	
			
			
		// Method for working out commission, VAT and production costs
		var productionHeight = parseFloat(prodHeightElem.value);
		var productionWidth = parseFloat(prodWidthElem.value);
		var hourRate = parseFloat(hourlyRateElem.value);
		var framing = parseFloat(mountFrameCostsElem.value);
		var transport = parseFloat(transportCostsElem.value);
		var commission = parseFloat(galleryCommElem.value);	
			
		
		// Calculations and roundings
		var prodSize = parseFloat(productionHeight) + parseFloat(productionWidth);
		var prodRate = parseFloat(prodSize * hourRate);
		var totalProd = parseFloat(prodRate) + parseFloat(transport) + parseFloat(framing);
		var commissionTotal = parseFloat(totalProd * commission) / 100;
		var totalCost = parseFloat(commissionTotal) + parseFloat(totalProd);
		var rounded = Math.ceil(totalCost/5)*5;
		
		
		/* 
		Calculation formula: 
		
		Add the height + width = size. 
		Multiply the size x rate. 
		Then add the production rate (size+rate) + framing costs + transport/postage costs = total production costs. 
		Multiply the Production cost x commission (%) to get total costs 
		*/
		
		
		// Output and error handling
		var totalOutputElem = document.getElementById("totalOutput");
		var roundedOutputElem = document.getElementById("roundedOutput");
		
		
		//Error message variables
		var prodHeightElem = document.getElementById("productionHeight");
		var prodWidthElem = document.getElementById("productionWidth");
		var hoursRateElem = document.getElementById("rateHours");
		var commissionErrorElem = document.getElementById("percentage");
		var errorTotalElem = document.getElementById("errorTotal");
		
		
		let = productionHeight;
		//error handling (Height)
		if (isNaN(productionHeight) || (productionHeight) < 1 ) {
			  prodHeightElem.innerHTML = "Enter total height in cms. ";
		
		} else if (productionHeight > 1000 ) {
			  prodHeightElem.innerHTML = "Height cannot be more than 1000 cms.";
		
		} else {	
			  prodHeightElem.innerHTML = "";
		}
		
		
		let = productionWidth;
		//error handling (Width)
		if (isNaN(productionWidth) || (productionWidth) < 1 ) {
			  prodWidthElem.innerHTML = "Enter total width in cms. ";
		
		} else if (productionWidth > 1000 ) {
			  prodWidthElem.innerHTML = "Width cannot be more than 1000 cms.";
		
		} else {	
			  prodWidthElem.innerHTML = "";
		}
		
		
		let = rateHours;
		//error handling (Hourly rate)
		if (isNaN(hourRate) || (hourRate) < 2 ) {
			  hoursRateElem.innerHTML = "Enter a rate per cm more than £1. ";
		
		} else if (hourRate > 10 ) {
			  hoursRateElem.innerHTML = "Rate per cm entered cannot be more than £10.";
		
		} else {	
			  hoursRateElem.innerHTML = "";
		}
		
	
		let = percentage;
		//error handling (Commission rate)
		if (isNaN(commission) || (commission) < 0 ) {
			  commissionErrorElem.innerHTML = "Enter minimum of 0% (if commission not applicable).";
		
		} else if (commission > 50 ) {
			  commissionErrorElem.innerHTML = "Enter a maximum of 50% commission.";
		
		} else {	
			  commissionErrorElem.innerHTML = "";
		}
		
		
		let = errorTotal;
		//error handling (Total)
		if (isNaN(totalCost) || (totalCost) < 0 ) {
			  errorTotalElem.innerHTML = "Enter amounts more than £1. Where no amount or time is required, input zero. " + "<br>" + "Decimal points accepted, no commas allowed.";
		
		} else if (totalCost > 10000 ) {
			  errorTotalElem.innerHTML = "Warning: A total of &pound" + Math.round(totalCost) + " will require extra insurance cover if over £10k.";
		
		} else {	
			  errorTotalElem.innerHTML = "";	
		
		//totals
		totalOutputElem.innerHTML = 
		"Size of artwork x rate = &pound" + prodRate.toFixed(2) + "<br>" + "<br>"  +
		"Production costs (minus commission) = &pound" + totalProd.toFixed(2) + "<br>" + "<br>"  +
		"Total costs plus gallery commission = &pound" + totalCost.toFixed(2);
		//total cost multiplied by 2
		"Total selling price" + roundedOutputElem.innerHTML = "&pound" + rounded;
		}
}, false);
	}, false);

	
		
	