var loanAmountInput = document.querySelector("#loanAmount");
var interestRateInput = document.querySelector("#interestRate");
var loanTermInput = document.querySelector("#loanTerm");
var monthlyPaymentOutput = document.querySelector("#monthlyPayment");
var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var loanAmount = parseFloat(loanAmountInput.value);
    var interestRate = parseFloat(interestRateInput.value) / 100 / 12;
    var loanTerm = parseFloat(loanTermInput.value) * 12;
    var monthlyPayment = loanAmount * interestRate / (1 - (1 / Math.pow(1 + interestRate, loanTerm)));
    monthlyPaymentOutput.textContent = monthlyPayment.toFixed(2);
});
