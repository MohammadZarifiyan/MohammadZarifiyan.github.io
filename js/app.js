import {calculateTheLoanInstallmentAmount, calculateTheFinalProfit} from './helpers.js';

const loanAmountInput = document.getElementById('loan-amount');
const loanInterestInput = document.getElementById('loan-interest');
const numberOfInstallmentsInput = document.getElementById('number-of-installments');
const profitInput = document.getElementById('profit');
const installmentAmountParagraph = document.getElementById('installment-amount');
const finalProfitParagraph = document.getElementById('final-profit');

function clearFormResult() {
    installmentAmountParagraph.textContent = '';
    finalProfitParagraph.textContent = '';
}

loanAmountInput.addEventListener('input', clearFormResult);
loanInterestInput.addEventListener('input', clearFormResult);
numberOfInstallmentsInput.addEventListener('input', clearFormResult);
profitInput.addEventListener('input', clearFormResult);

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const loanAmount = parseInt(loanAmountInput.value);
    const loanInterest = parseInt(loanInterestInput.value);
    const numberOfInstallments = parseInt(numberOfInstallmentsInput.value);
    const profit = parseInt(profitInput.value);

    const installmentAmount = calculateTheLoanInstallmentAmount(loanAmount, loanInterest, numberOfInstallments);
    const finalProfit = calculateTheFinalProfit(loanAmount, numberOfInstallments, installmentAmount, profit);

    if (typeof installmentAmount === 'number' && typeof finalProfit === 'number') {
        installmentAmountParagraph.textContent = `The amount of each installment: ${installmentAmount.toLocaleString('en-US', {maximumFractionDigits: 2})}`;
        finalProfitParagraph.textContent = `The remaining amount for you after ${numberOfInstallments} months when you have paid all the installments of this loan: ${finalProfit.toLocaleString('en-US', {maximumFractionDigits: 2})}`;
    }
});
