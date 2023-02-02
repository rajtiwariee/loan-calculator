const loanAmountInput = document.querySelector("#loanAmount") as HTMLInputElement;
const interestRateInput = document.querySelector("#interestRate") as HTMLInputElement;
const loanTermInput = document.querySelector("#loanTerm") as HTMLInputElement;
const monthlyPaymentOutput = document.querySelector("#monthlyPayment") as HTMLElement;

const form = document.querySelector("form") as HTMLFormElement;
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const loanAmount = parseFloat(loanAmountInput.value);
  const interestRate = parseFloat(interestRateInput.value) / 100 / 12;
  const loanTerm = parseFloat(loanTermInput.value) * 12;

  const monthlyPayment = loanAmount * interestRate / (1 - (1 / Math.pow(1 + interestRate, loanTerm)));
  monthlyPaymentOutput.textContent = monthlyPayment.toFixed(2);
});
