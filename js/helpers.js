function calculateTheLoanInstallmentAmount(loanAmount, loanInterest, numberOfInstallments) {
    if (typeof loanAmount === 'number' && typeof loanInterest === 'number' && typeof numberOfInstallments === 'number') {
        return (loanAmount * (loanInterest / 1_200) *  ((1 + (loanInterest / 1_200)) ** numberOfInstallments)) / (((1 + (loanInterest / 1_200)) ** numberOfInstallments) - 1);
    }
}

function calculateTheFinalProfit(loanAmount, numberOfInstallments, installmentAmount, profit) {
    if (typeof numberOfInstallments === 'number' && typeof loanAmount === 'number' && typeof profit === 'number') {
        let remainingLoan = loanAmount;

        for (let i = 1; i <= numberOfInstallments; i++) {
            const gain = remainingLoan * (profit / 100 / 12);

            if (gain > installmentAmount) {
                remainingLoan = remainingLoan + (gain - installmentAmount);
            }
            else {
                remainingLoan = remainingLoan - (installmentAmount - gain);
            }
        }

        return remainingLoan;
    }
}

export {calculateTheLoanInstallmentAmount, calculateTheFinalProfit};
